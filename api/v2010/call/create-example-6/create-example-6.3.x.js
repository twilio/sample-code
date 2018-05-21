// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         sipAuthPassword: 'secret',
         sipAuthUsername: 'jack',
         url: 'http://www.example.com/sipdial.xml',
         to: 'sip:kate@example.com',
         from: 'Jack'
       })
      .then(call => console.log(call.sid))
      .done();
