// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.addresses
      .create({
         customerName: 'customerName',
         street: 'street',
         city: 'city',
         region: 'region',
         postalCode: 'postalCode',
         isoCountry: 'US'
       })
      .then(address => console.log(address.sid))
      .done();
