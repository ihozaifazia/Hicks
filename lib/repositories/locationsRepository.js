/**
 * lib/repositories/locationsRepository.js
 * -----------------------------------------------------------------------
 * Reusable data-access functions for the `locations` table.
 * Plain queries only — no API wiring, no business rules.
 * -----------------------------------------------------------------------
 */

const { query } = require('../db');

async function getAllLocations({ activeOnly = true } = {}) {
  const text = activeOnly
    ? 'SELECT * FROM locations WHERE is_active = true ORDER BY id ASC'
    : 'SELECT * FROM locations ORDER BY id ASC';
  const result = await query(text);
  return result.rows;
}

async function getLocationById(id) {
  const result = await query('SELECT * FROM locations WHERE id = $1', [id]);
  return result.rows[0] || null;
}

/**
 * Looks up an active location by name. Uses a partial, case-insensitive
 * match (ILIKE) rather than an exact match because the seed data uses
 * full branch names (e.g. "Hicks Bahawalpur - Kausar Colony") while the
 * booking form uses short display names (e.g. "Kausar Colony").
 */
async function getLocationByName(name) {
  const result = await query(
    "SELECT * FROM locations WHERE is_active = true AND name ILIKE '%' || $1 || '%' LIMIT 1",
    [name]
  );
  return result.rows[0] || null;
}

module.exports = {
  getAllLocations,
  getLocationById,
  getLocationByName,
};
