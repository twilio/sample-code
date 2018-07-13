// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: '+15005550006',
         body: 'Do. Or do not. There is no try.',
         to: '+14108675310'
       })
      .then(message => console.log(message.sid))
      .done();
