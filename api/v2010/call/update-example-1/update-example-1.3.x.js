// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .update({
         method: 'POST',
         sid: 'CAe1644a7eed5088b159577c5802d8be38',
         url: 'http://demo.twilio.com/docs/voice.xml'
       })
      .then(call => console.log(call.accountSid))
      .done();
