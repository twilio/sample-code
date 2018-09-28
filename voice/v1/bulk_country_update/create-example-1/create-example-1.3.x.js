// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.voice.voicePermissions
  .bulkCountryUpdates
  .create({
     updateRequest: `{[{ "iso_code": "GB", "low_risk_numbers": "Enabled", "high_risk_special_numbers":"Enabled", "high_risk_irsf_numbers": "Enabled" }]}`
   })
  .then(bulk_country_update => console.log(bulk_country_update.updateCount))
  .done();
