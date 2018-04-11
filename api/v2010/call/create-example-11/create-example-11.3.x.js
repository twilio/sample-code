// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         from: '+987654321',
         to: '+123456789',
         url: 'http://demo.twilio.com/docs/voice.xml'
       })
      .then(call => console.log(call.sid))
      .done();
