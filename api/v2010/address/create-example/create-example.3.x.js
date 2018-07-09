// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.addresses
      .create({
         customerName: 'Customer 500',
         street: 'Elm Street',
         city: 'Racoon',
         region: 'Mordor',
         postalCode: '150',
         isoCountry: 'AX'
       })
      .then(address => console.log(address.sid))
      .done();
