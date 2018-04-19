// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: `Let's grab lunch at Milliways tomorrow!`,
         from: '+14158141829',
         mediaUrl: 'http://www.example.com/cheeseburger.png',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid))
      .done();
