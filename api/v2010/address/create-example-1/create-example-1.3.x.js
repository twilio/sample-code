// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.addresses
      .create({
         city: 'Berlin',
         customerName: 'Customer 123',
         friendlyName: 'Billing - Customer 123',
         isoCountry: 'DE',
         postalCode: '10875',
         region: 'Berlin',
         street: '1 Hasselhoff Lane'
       })
      .then(address => console.log(address.sid))
      .done();
