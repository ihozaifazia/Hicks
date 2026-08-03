/**
 * api/admin/login.js
 * -----------------------------------------------------------------------
 * PLACEHOLDER — admin authentication is intentionally NOT implemented
 * yet. Reserves the route /api/admin/login for a future auth layer.
 * -----------------------------------------------------------------------
 */

const { notImplemented, methodNotAllowed } = require('../../lib/response');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return methodNotAllowed(res, ['POST']);
  }

  return notImplemented(res, 'Admin authentication');
};
