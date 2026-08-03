/**
 * lib/repositories/bookingsRepository.js
 * -----------------------------------------------------------------------
 * Reusable data-access functions for the `bookings` table.
 *
 * SCOPE NOTE: these are plain parameterized queries only. There is no
 * availability checking, slot-conflict resolution, past-date rejection,
 * or confirmation-email triggering here — that business logic belongs to
 * Phase 3 (Booking System) and is intentionally left unimplemented.
 * The database's own UNIQUE(location_id, booking_date, booking_time)
 * constraint (see sql/001_schema.sql) is the only guard active right now.
 * -----------------------------------------------------------------------
 */

const { query } = require('../db');

/**
 * Inserts a booking row exactly as given. Does not validate availability,
 * check for past dates, or send any email — callers (Phase 3 API logic)
 * are responsible for that.
 */
async function insertBooking({
  customerName,
  customerPhone,
  customerEmail = null,
  serviceId,
  locationId,
  bookingDate,
  bookingTime,
  notes = null,
}) {
  const result = await query(
    `INSERT INTO bookings
       (customer_name, customer_phone, customer_email, service_id, location_id, booking_date, booking_time, notes)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [customerName, customerPhone, customerEmail, serviceId, locationId, bookingDate, bookingTime, notes]
  );
  return result.rows[0];
}

async function getBookingById(id) {
  const result = await query('SELECT * FROM bookings WHERE id = $1', [id]);
  return result.rows[0] || null;
}

async function getBookingsByDateAndLocation(bookingDate, locationId) {
  const result = await query(
    'SELECT * FROM bookings WHERE booking_date = $1 AND location_id = $2 ORDER BY booking_time ASC',
    [bookingDate, locationId]
  );
  return result.rows;
}

/**
 * Plain status update. Does not enforce which transitions are allowed
 * (e.g. cancelled -> completed) — that rule belongs to Phase 5
 * (Booking Management).
 */
async function updateBookingStatus(id, status) {
  const result = await query(
    'UPDATE bookings SET status = $2 WHERE id = $1 RETURNING *',
    [id, status]
  );
  return result.rows[0] || null;
}

module.exports = {
  insertBooking,
  getBookingById,
  getBookingsByDateAndLocation,
  updateBookingStatus,
};
