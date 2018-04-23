// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.services('MG2172dd2db502e20dd981ef0d67850e1a')
                .shortCodes('SC3f94c94562ac88dccf16f8859a1a8b25')
                .remove()
                .then(short_code => console.log(short_code.sid))
                .done();
