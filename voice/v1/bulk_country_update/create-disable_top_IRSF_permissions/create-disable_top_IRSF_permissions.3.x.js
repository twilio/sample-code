// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.voice.dialingPermissions
  .bulkCountryUpdates
  .create({
     updateRequest: `[{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "CU"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "LV"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "SO"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "LT"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "GN"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "GM"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "MV"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "EE"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "ZW"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "TN"}]`
   })
  .then(bulk_country_update => console.log(bulk_country_update.updateCount));
