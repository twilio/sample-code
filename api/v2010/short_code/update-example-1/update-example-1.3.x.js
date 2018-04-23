// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.shortCodes('SC6b20cb705c1e8f00210049b20b70fce3')
      .update({smsUrl: 'http://demo.twilio.com/docs/sms.xml'})
      .then(short_code => console.log(short_code.friendlyName))
      .done();
