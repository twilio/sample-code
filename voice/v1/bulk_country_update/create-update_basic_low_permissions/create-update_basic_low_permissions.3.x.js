// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.voice.voicePermissions
  .bulkCountryUpdates
  .create({
     updateRequest: `[{'iso_code': 'US', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'DE', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'FR', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'GB', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'IN', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'IL', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'JP', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'BR', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'US', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}]`
   })
  .then(bulk_country_update => console.log(bulk_country_update.updateCount));
