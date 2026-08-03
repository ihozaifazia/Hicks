/**
 * api/contact/send.js
 * -----------------------------------------------------------------------
 * PLACEHOLDER — contact form / "RESERVE YOUR SESSION" form handling
 * (from service.html) is intentionally NOT implemented yet. Reserves
 * the route /api/contact/send.
 * -----------------------------------------------------------------------
 */

const { notImplemented, methodNotAllowed } = require('../../lib/response');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return methodNotAllowed(res, ['POST']);
  }

  return notImplemented(res, 'Contact form submission');
};
