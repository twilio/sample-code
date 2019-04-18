// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.conferences
      .list({
         dateCreated: new Date(Date.UTC(2009, 6, 6)),
         status: 'completed',
         limit: 20
       })
      .then(conferences => conferences.forEach(c => console.log(c.sid)));
