// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.availablePhoneNumbers
  .list({limit: 20})
  .then(availablePhoneNumbers => availablePhoneNumbers.forEach(a => console.log(a.countryCode)));
