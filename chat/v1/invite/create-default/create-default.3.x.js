// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.chat.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .invites
              .create({identity: 'identity'})
              .then(invite => console.log(invite.sid));
