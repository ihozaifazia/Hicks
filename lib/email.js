/**
 * lib/email.js
 * -----------------------------------------------------------------------
 * Brevo (formerly Sendinblue) email client scaffold.
 *
 * SCOPE NOTE: Email sending is explicitly OUT of scope for this pass.
 * This file only wires up a reusable client getter so a future
 * implementation can call Brevo's transactional email API without
 * re-doing setup. No send functions are implemented.
 *
 * Requires the environment variable:
 *   BREVO_API_KEY  (see .env.example)
 * -----------------------------------------------------------------------
 */

const SibApiV3Sdk = require('@getbrevo/brevo');

let apiInstance;

/**
 * Returns a configured Brevo TransactionalEmailsApi client.
 * Throws if BREVO_API_KEY is missing so misconfiguration fails loudly
 * at call time rather than silently.
 */
function getBrevoClient() {
  if (!process.env.BREVO_API_KEY) {
    throw new Error(
      'BREVO_API_KEY is not set. Copy .env.example to .env and add your Brevo API key.'
    );
  }

  if (!apiInstance) {
    apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );
  }

  return apiInstance;
}

/**
 * Placeholder — intentionally not implemented.
 * Future work: build the email payload (to/from/subject/template) and
 * call apiInstance.sendTransacEmail(...) here.
 */
async function sendEmail() {
  throw new Error('sendEmail() is not implemented yet.');
}

module.exports = {
  getBrevoClient,
  sendEmail,
};
