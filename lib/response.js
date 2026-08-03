/**
 * lib/response.js
 * -----------------------------------------------------------------------
 * Standardized JSON response helpers so every /api function returns a
 * consistent shape:
 *   Success: { success: true, data: ... }
 *   Error:   { success: false, error: "message", details: [...] }
 * -----------------------------------------------------------------------
 */

function sendSuccess(res, data = null, status = 200) {
  res.status(status).json({ success: true, data });
}

function sendError(res, message = 'Something went wrong.', status = 400, details = []) {
  res.status(status).json({ success: false, error: message, details });
}

function methodNotAllowed(res, allowed = ['GET']) {
  res.setHeader('Allow', allowed.join(', '));
  sendError(res, `Method not allowed. Use: ${allowed.join(', ')}`, 405);
}

function notImplemented(res, feature = 'This endpoint') {
  sendError(res, `${feature} is not implemented yet.`, 501);
}

module.exports = {
  sendSuccess,
  sendError,
  methodNotAllowed,
  notImplemented,
};
