/**
 * lib/db.js
 * -----------------------------------------------------------------------
 * Reusable Neon PostgreSQL connection utility for Vercel Serverless
 * Functions.
 *
 * Scope: connection + query execution ONLY.
 * No tables, schema, or business queries are defined here — that is
 * intentionally left for a later implementation phase.
 *
 * Usage (inside any /api function, once real endpoints are built):
 *
 *   const { query } = require('../../lib/db');
 *   const result = await query('SELECT NOW()');
 *
 * Requires the environment variable:
 *   DATABASE_URL  (Neon connection string, see .env.example)
 * -----------------------------------------------------------------------
 */

const { Pool } = require('@neondatabase/serverless');

let pool;

/**
 * Returns a singleton Neon connection pool.
 * Serverless functions are re-invoked frequently, so the pool is cached
 * on the module scope to avoid exhausting connections across invocations.
 */
function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL is not set. Copy .env.example to .env and configure your Neon connection string.'
    );
  }

  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }

  return pool;
}

/**
 * Executes a parameterized SQL query.
 * Always use parameterized queries ($1, $2, ...) — never string-concatenate
 * user input into SQL.
 *
 * @param {string} text - SQL query text
 * @param {Array} params - Query parameters
 * @returns {Promise<import('@neondatabase/serverless').QueryResult>}
 */
async function query(text, params = []) {
  const client = getPool();
  return client.query(text, params);
}

/**
 * Simple connectivity check. Safe to call from a health-check endpoint.
 * Does not assume any tables exist.
 */
async function ping() {
  const result = await query('SELECT NOW() AS now');
  return result.rows[0];
}

module.exports = {
  getPool,
  query,
  ping,
};
