// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'https://example.com',
         to: '+15558675310',
         from: '+15017122661'
       })
      .then(call => console.log(call.sid))
      .done();
