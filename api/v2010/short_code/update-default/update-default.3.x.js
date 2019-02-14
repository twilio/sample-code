// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.shortCodes('SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .update({friendlyName: 'friendlyName'})
      .then(short_code => console.log(short_code.friendlyName));
