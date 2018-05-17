// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.fax.faxes
  .create({
     from: '+15017122661',
     to: '+15558675310',
     mediaUrl: 'https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf'
   })
  .then(fax => console.log(fax.sid))
  .done();
