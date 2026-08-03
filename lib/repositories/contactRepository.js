/**
 * lib/repositories/contactRepository.js
 * -----------------------------------------------------------------------
 * Reusable data-access functions for the `contact_messages` table.
 * Plain queries only — no email sending, no API wiring.
 * -----------------------------------------------------------------------
 */

const { query } = require('../db');

async function insertContactMessage({ name, email, phone = null, message }) {
  const result = await query(
    `INSERT INTO contact_messages (name, email, phone, message)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, email, phone, message]
  );
  return result.rows[0];
}

async function getContactMessageById(id) {
  const result = await query('SELECT * FROM contact_messages WHERE id = $1', [id]);
  return result.rows[0] || null;
}

module.exports = {
  insertContactMessage,
  getContactMessageById,
};
