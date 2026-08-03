/**
 * api/health.js
 * -----------------------------------------------------------------------
 * The one FUNCTIONAL endpoint in this architecture pass.
 *
 * Purpose: verify that the Vercel Serverless Function setup and the
 * Neon Postgres connection utility (lib/db.js) work end-to-end, without
 * implementing any business logic, tables, or auth.
 *
 * GET /api/health
 *   -> { success: true, data: { status: "ok", db: "connected", time: ... } }
 *
 * If DATABASE_URL isn't configured yet, this responds with a clear
 * error rather than crashing, so it's safe to deploy before Neon is
 * set up.
 * -----------------------------------------------------------------------
 */

const { sendSuccess, sendError, methodNotAllowed } = require('../lib/response');
const { ping } = require('../lib/db');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return methodNotAllowed(res, ['GET']);
  }

  try {
    const { now } = await ping();
    return sendSuccess(res, { status: 'ok', db: 'connected', time: now });
  } catch (err) {
    return sendError(res, `Database not reachable: ${err.message}`, 503);
  }
};
