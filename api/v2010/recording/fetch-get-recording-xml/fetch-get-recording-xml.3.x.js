// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.recordings('RE557ce644e5ab84fa21cc21112e22c485')
      .fetch()
      .then(recording => console.log(recording.callSid))
      .done();
