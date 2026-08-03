/**
 * lib/repositories/servicesRepository.js
 * -----------------------------------------------------------------------
 * Reusable data-access functions for the `services` table.
 * Plain queries only — no API wiring, no business rules.
 * -----------------------------------------------------------------------
 */

const { query } = require('../db');

async function getAllServices({ activeOnly = true } = {}) {
  const text = activeOnly
    ? 'SELECT * FROM services WHERE is_active = true ORDER BY category ASC, price_cents ASC'
    : 'SELECT * FROM services ORDER BY category ASC, price_cents ASC';
  const result = await query(text);
  return result.rows;
}

async function getServiceById(id) {
  const result = await query('SELECT * FROM services WHERE id = $1', [id]);
  return result.rows[0] || null;
}

async function getServicesByCategory(category) {
  const result = await query(
    'SELECT * FROM services WHERE category = $1 AND is_active = true ORDER BY price_cents ASC',
    [category]
  );
  return result.rows;
}

/**
 * Looks up an active service by its exact name (case-insensitive).
 * The booking form's service names already match the seed data exactly,
 * so no partial matching is needed here (unlike locations).
 */
async function getServiceByName(name) {
  const result = await query(
    'SELECT * FROM services WHERE is_active = true AND name ILIKE $1 LIMIT 1',
    [name]
  );
  return result.rows[0] || null;
}

module.exports = {
  getAllServices,
  getServiceById,
  getServicesByCategory,
  getServiceByName,
};
