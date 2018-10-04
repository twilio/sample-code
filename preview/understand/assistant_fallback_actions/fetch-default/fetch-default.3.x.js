// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand
  .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .assistantFallbackActions()
  .fetch()
  .then(assistant_fallback_actions => console.log(assistant_fallback_actions.assistantSid))
  .done();
