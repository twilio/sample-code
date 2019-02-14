// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.voice.voicePermissions
  .bulkCountryUpdates
  .create({updateRequest: 'updateRequest'})
  .then(bulk_country_update => console.log(bulk_country_update.updateCount));
