// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: `Join Earth's mightiest heroes. Like Kevin Bacon.`,
         from: '+15017122661',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid));
