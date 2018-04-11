// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .update({
         sid: 'AP2a0747eba6abf96b7e3c3ff0b4530f6e',
         smsUrl: 'http://demo.twilio.com/docs/sms.xml',
         voiceUrl: 'http://demo.twilio.com/docs/voice.xml'
       })
      .then(application => console.log(application.accountSid))
      .done();
