// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .update({
         customerName: 'Customer 456',
         sid: 'AD2a0747eba6abf96b7e3c3ff0b4530f6e',
         street: '2 Hasselhoff Lane'
       })
      .then(address => console.log(address.accountSid))
      .done();
