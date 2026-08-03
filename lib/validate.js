/**
 * lib/validate.js
 * -----------------------------------------------------------------------
 * Reusable, generic input validation helpers for API routes.
 *
 * These are deliberately generic (not tied to a "booking" or "contact"
 * business shape) so the same helpers can be composed by whichever
 * endpoint logic is implemented later.
 * -----------------------------------------------------------------------
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts +, digits, spaces, dashes, parentheses — loose on purpose,
// tighten per-country rules later if needed.
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;
// 24-hour HH:MM, matching the value an <input type="time"> sends.
const TIME_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;

/**
 * Returns true if value is a non-empty string after trimming.
 */
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Validates an email address format.
 */
function isValidEmail(value) {
  return isNonEmptyString(value) && EMAIL_RE.test(value.trim());
}

/**
 * Validates a phone number format (loose international check).
 */
function isValidPhone(value) {
  return isNonEmptyString(value) && PHONE_RE.test(value.trim());
}

/**
 * Validates an ISO date string (YYYY-MM-DD) and that it parses to a
 * real calendar date.
 */
function isValidDate(value) {
  if (!isNonEmptyString(value)) return false;
  const date = new Date(value);
  return !Number.isNaN(date.getTime());
}

/**
 * Validates a 24-hour "HH:MM" time string, matching what an
 * <input type="time"> sends.
 */
function isValidTime(value) {
  return isNonEmptyString(value) && TIME_RE.test(value.trim());
}

/**
 * Returns true if the given date (YYYY-MM-DD) + time (HH:MM) is in the
 * future relative to right now. Used to reject past bookings without
 * assuming anything about business hours or slot length.
 */
function isFutureDateTime(dateValue, timeValue) {
  if (!isValidDate(dateValue) || !isValidTime(timeValue)) return false;
  const candidate = new Date(`${dateValue}T${timeValue}:00`);
  return candidate.getTime() > Date.now();
}

/**
 * Strips characters commonly used in injection/XSS payloads from a
 * plain-text field. This is a defense-in-depth helper — always pair
 * with parameterized SQL queries and proper output-encoding on render.
 */
function sanitizeText(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>]/g, '').trim();
}

/**
 * Validates a plain object against a simple required-fields schema.
 *
 * @param {Object} data - The request payload
 * @param {Object} schema - e.g. { name: 'string', email: 'email', phone: 'phone', date: 'date', time: 'time' }
 * @returns {{ valid: boolean, errors: string[] }}
 */
function validateSchema(data, schema) {
  const errors = [];

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Request body must be a JSON object.'] };
  }

  for (const [field, type] of Object.entries(schema)) {
    const value = data[field];

    switch (type) {
      case 'string':
        if (!isNonEmptyString(value)) errors.push(`${field} is required.`);
        break;
      case 'email':
        if (!isValidEmail(value)) errors.push(`${field} must be a valid email address.`);
        break;
      case 'email-optional':
        // Only validated if a value was actually provided.
        if (isNonEmptyString(value) && !isValidEmail(value)) {
          errors.push(`${field} must be a valid email address.`);
        }
        break;
      case 'phone':
        if (!isValidPhone(value)) errors.push(`${field} must be a valid phone number.`);
        break;
      case 'date':
        if (!isValidDate(value)) errors.push(`${field} must be a valid date.`);
        break;
      case 'time':
        if (!isValidTime(value)) errors.push(`${field} must be a valid time (HH:MM).`);
        break;
      default:
        // Unknown type in schema — treat as a config error, not a user error.
        errors.push(`Unknown validation type "${type}" for field ${field}.`);
    }
  }

  return { valid: errors.length === 0, errors };
}

module.exports = {
  isNonEmptyString,
  isValidEmail,
  isValidPhone,
  isValidDate,
  isValidTime,
  isFutureDateTime,
  sanitizeText,
  validateSchema,
};
