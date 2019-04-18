// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .list({
         dateSent: new Date(Date.UTC(2016, 7, 31, 0, 0, 0)),
         from: '+15017122661',
         to: '+15558675310',
         limit: 20
       })
      .then(messages => messages.forEach(m => console.log(m.sid)));
