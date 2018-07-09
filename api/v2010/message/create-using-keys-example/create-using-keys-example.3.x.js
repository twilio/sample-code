// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const apiKey = 'SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const apiSecret = 'your_api_secret';
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });

client.messages
      .create({
         body: 'Never gonna give you up.',
         from: '+15017122661',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid))
      .done();
