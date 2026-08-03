/**
 * api/booking/availability.js
 * -----------------------------------------------------------------------
 * Phase 3 — Booking Backend
 *
 * GET /api/booking/availability?location=Kausar+Colony&date=2026-08-01
 *
 * Returns the times already booked at a location on a given date, so a
 * caller can compute which slots are still free. This deliberately does
 * NOT generate a full slot grid (that would require assuming an opening
 * schedule and a fixed slot length that requirements.md doesn't specify)
 * — it reports what's taken, matching "keep it simple, don't
 * over-engineer" from instructions.md.
 *
 * Response:
 *   { location: string, date: string, bookedSlots: string[] }  // "HH:MM"
 * -----------------------------------------------------------------------
 */

const { sendSuccess, sendError, methodNotAllowed } = require('../../lib/response');
const { isValidDate } = require('../../lib/validate');
const { getLocationByName } = require('../../lib/repositories/locationsRepository');
const { getBookingsByDateAndLocation } = require('../../lib/repositories/bookingsRepository');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return methodNotAllowed(res, ['GET']);
  }

  try {
    const { location: locationName, date } = req.query || {};

    if (!locationName) {
      return sendError(res, 'A "location" query parameter is required.', 400);
    }
    if (!isValidDate(date)) {
      return sendError(res, 'A valid "date" query parameter (YYYY-MM-DD) is required.', 400);
    }

    const location = await getLocationByName(locationName);
    if (!location) {
      return sendError(res, `"${locationName}" is not a recognized location.`, 400);
    }

    const bookings = await getBookingsByDateAndLocation(date, location.id);
    const bookedSlots = bookings
      .filter((booking) => booking.status !== 'cancelled')
      .map((booking) => booking.booking_time.slice(0, 5));

    return sendSuccess(res, {
      location: location.name,
      date,
      bookedSlots,
    });
  } catch (err) {
    return sendError(res, `Could not check availability: ${err.message}`, 500);
  }
};
