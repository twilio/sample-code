// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.incomingPhoneNumbers
      .create({
         friendlyName: 'My Company Line',
         phoneNumber: '+15105647903',
         voiceMethod: 'GET',
         voiceUrl: 'http://demo.twilio.com/docs/voice.xml'
       })
      .then(incoming_phone_number => console.log(incoming_phone_number.sid))
      .done();
