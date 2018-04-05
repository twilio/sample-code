// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         from: 'Jack',
         to: 'sip:kate@example.com',
         url: 'http://www.example.com/sipdial.xml'
       })
      .then(call => console.log(call.sid))
      .done();
