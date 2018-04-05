// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     to: '+15558675310',
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661'
   })
  .then(message => console.log(message.sid))
  .done();
