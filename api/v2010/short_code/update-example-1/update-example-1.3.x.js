// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.shortCodes('SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .update({smsUrl: 'http://demo.twilio.com/docs/sms.xml'})
      .then(short_code => console.log(short_code.sid))
      .done();
