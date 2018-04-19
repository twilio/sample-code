// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Phantom Menace was clearly the best of the prequel trilogy.',
         messagingServiceSid: 'MG9752274e9e519418a7406176694466fa',
         to: '+441632960675'
       })
      .then(message => console.log(message.sid))
      .done();
