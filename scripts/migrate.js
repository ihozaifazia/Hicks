/**
 * scripts/migrate.js
 * -----------------------------------------------------------------------
 * Phase 2 — Database Design
 *
 * Applies the SQL files in /sql, in filename order, against the database
 * pointed to by DATABASE_URL. This is infrastructure only: it does not
 * contain any booking business logic, it just runs schema/seed SQL.
 *
 * Usage:
 *   npm run db:migrate
 *
 * Requires DATABASE_URL to be set (see .env.example).
 * -----------------------------------------------------------------------
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { getPool } = require('../lib/db');

const SQL_DIR = path.join(__dirname, '..', 'sql');

/**
 * Splits a SQL file into individual statements on semicolons that end a
 * line, while leaving $$ ... $$ function bodies (used by the
 * set_updated_at() trigger function) intact as a single statement.
 */
function splitStatements(sql) {
  const statements = [];
  let current = '';
  let inDollarQuote = false;

  const lines = sql.split('\n');
  for (const line of lines) {
    current += line + '\n';

    if (line.includes('$$')) {
      inDollarQuote = !inDollarQuote;
    }

    const trimmed = line.trim();
    if (!inDollarQuote && trimmed.endsWith(';')) {
      statements.push(current.trim());
      current = '';
    }
  }

  if (current.trim().length > 0) {
    statements.push(current.trim());
  }

  // Drop chunks that are empty or contain only comment lines — but do
  // NOT filter by "starts with --", since a real statement is often
  // preceded by a comment on the line(s) right before it in the same
  // chunk (that would wrongly discard the SQL along with the comment).
  return statements.filter((s) => {
    const codeLines = s
      .split('\n')
      .filter((line) => line.trim().length > 0 && !line.trim().startsWith('--'));
    return codeLines.length > 0;
  });
}

async function runFile(pool, filename) {
  const fullPath = path.join(SQL_DIR, filename);
  const sql = fs.readFileSync(fullPath, 'utf8');
  const statements = splitStatements(sql);

  console.log(`\nApplying ${filename} (${statements.length} statements)...`);

  for (const statement of statements) {
    await pool.query(statement);
  }

  console.log(`✓ ${filename} applied`);
}

async function main() {
  const pool = getPool();

  const files = fs
    .readdirSync(SQL_DIR)
    .filter((f) => f.endsWith('.sql'))
    .sort(); // 001_, 002_, ... run in order

  if (files.length === 0) {
    console.log('No SQL files found in /sql.');
    return;
  }

  for (const file of files) {
    await runFile(pool, file);
  }

  console.log('\nAll migrations applied successfully.');
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('\nMigration failed:', err.message);
    process.exit(1);
  });
