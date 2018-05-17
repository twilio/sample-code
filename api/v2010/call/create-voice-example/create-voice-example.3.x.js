// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
     url: 'http://twimlets.com/message?Message%5B0%5D=Hello%20from%20your%20subaccount',
     to: '+16518675310',
     from: '+14158141829'
   })
  .then(call => console.log(call.sid))
  .done();
