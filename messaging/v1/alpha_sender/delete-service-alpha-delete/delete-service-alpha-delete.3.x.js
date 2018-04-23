// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.services('MG2172dd2db502e20dd981ef0d67850e1a')
                .alphaSenders('AIc781610ec0b3400c9e0cab8e757da937')
                .remove()
                .then(alpha_sender => console.log(alpha_sender.sid))
                .done();
