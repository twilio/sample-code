// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Open to confirm: http://yourserver.com/confirm?id=1234567890',
         from: '+15017122661',
         provideFeedback: true,
         to: '+15558675310'
       })
      .then(message => console.log(message.sid));
