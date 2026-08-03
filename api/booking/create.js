/**
 * api/booking/create.js
 * -----------------------------------------------------------------------
 * Phase 3 — Booking Backend
 *
 * POST /api/booking/create
 *
 * Body (JSON):
 *   {
 *     customerName: string,
 *     customerPhone: string,
 *     customerEmail?: string,
 *     service: string,       // service name, e.g. "Signature Sculpt"
 *     location: string,      // location name, e.g. "Kausar Colony"
 *     bookingDate: string,   // "YYYY-MM-DD"
 *     bookingTime: string,   // "HH:MM" (24-hour)
 *     notes?: string
 *   }
 *
 * Enforces the rules from requirements.md's Booking System section:
 *   - required fields are present and well-formed
 *   - the selected service and location actually exist
 *   - the date/time isn't in the past
 *   - the slot isn't already booked at that location
 *
 * Sending a real confirmation email is Phase 6 (Email) scope and is not
 * done here.
 * -----------------------------------------------------------------------
 */

const { sendSuccess, sendError, methodNotAllowed } = require('../../lib/response');
const { validateSchema, sanitizeText, isFutureDateTime } = require('../../lib/validate');
const { getServiceByName } = require('../../lib/repositories/servicesRepository');
const { getLocationByName } = require('../../lib/repositories/locationsRepository');
const {
  insertBooking,
  getBookingsByDateAndLocation,
} = require('../../lib/repositories/bookingsRepository');

const SLOT_TAKEN_MESSAGE =
  'This time slot is already booked at the selected location. Please choose a different time.';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return methodNotAllowed(res, ['POST']);
  }

  try {
    const body = req.body || {};

    const { valid, errors } = validateSchema(body, {
      customerName: 'string',
      customerPhone: 'phone',
      customerEmail: 'email-optional',
      service: 'string',
      location: 'string',
      bookingDate: 'date',
      bookingTime: 'time',
    });

    if (!valid) {
      return sendError(res, 'Please correct the errors below.', 400, errors);
    }

    if (!isFutureDateTime(body.bookingDate, body.bookingTime)) {
      return sendError(res, 'Bookings must be scheduled for a future date and time.', 400);
    }

    const service = await getServiceByName(body.service);
    if (!service) {
      return sendError(res, `"${body.service}" is not a recognized service.`, 400);
    }

    const location = await getLocationByName(body.location);
    if (!location) {
      return sendError(res, `"${body.location}" is not a recognized location.`, 400);
    }

    // Check for an existing, non-cancelled booking at the same
    // location/date/time before attempting the insert.
    const sameDayBookings = await getBookingsByDateAndLocation(body.bookingDate, location.id);
    const isSlotTaken = sameDayBookings.some(
      (booking) =>
        booking.status !== 'cancelled' &&
        booking.booking_time.slice(0, 5) === body.bookingTime
    );
    if (isSlotTaken) {
      return sendError(res, SLOT_TAKEN_MESSAGE, 409);
    }

    let booking;
    try {
      booking = await insertBooking({
        customerName: sanitizeText(body.customerName),
        customerPhone: body.customerPhone.trim(),
        customerEmail: body.customerEmail ? body.customerEmail.trim() : null,
        serviceId: service.id,
        locationId: location.id,
        bookingDate: body.bookingDate,
        bookingTime: body.bookingTime,
        notes: body.notes ? sanitizeText(body.notes) : null,
      });
    } catch (err) {
      // Race-condition safety net: two requests could pass the check
      // above at nearly the same time. The database's own
      // UNIQUE(location_id, booking_date, booking_time) constraint is
      // the final guard — translate its violation into the same,
      // friendly 409 response.
      if (err.code === '23505') {
        return sendError(res, SLOT_TAKEN_MESSAGE, 409);
      }
      throw err;
    }

    return sendSuccess(
      res,
      {
        id: booking.id,
        service: service.name,
        location: location.name,
        bookingDate: booking.booking_date,
        bookingTime: booking.booking_time,
        status: booking.status,
      },
      201
    );
  } catch (err) {
    return sendError(res, `Could not create booking: ${err.message}`, 500);
  }
};
