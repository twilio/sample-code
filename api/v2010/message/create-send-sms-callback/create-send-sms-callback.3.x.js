// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'McAvoy or Stewart? These timelines can get so confusing.',
         from: '+15017122661',
         statusCallback: 'http://requestb.in/1234abcd',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid))
      .done();
