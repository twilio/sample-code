// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.fax.faxes
  .create({
     mediaUrl: 'https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf',
     to: 'sip:kate@example.com',
     from: 'Jack',
     sipAuthPassword: 'secret',
     sipAuthUsername: 'jack'
   })
  .then(fax => console.log(fax.sid))
  .done();
