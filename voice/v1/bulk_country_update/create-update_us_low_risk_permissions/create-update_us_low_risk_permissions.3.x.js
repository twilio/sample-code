// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.voice.dialingPermissions
  .bulkCountryUpdates
  .create({
     updateRequest: `[ { "iso_code": "US", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"false", "high_risk_tollfraud_numbers_enabled": "false" } ]`
   })
  .then(bulk_country_update => console.log(bulk_country_update.updateCount));
