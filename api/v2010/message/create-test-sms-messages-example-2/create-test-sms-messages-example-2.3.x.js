// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Hey Mr Nugget, you the bomb!',
         from: '+15005550006',
         to: '+15005550009'
       })
      .then(message => console.log(message.sid))
      .done();
