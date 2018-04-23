// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.services('MG2172dd2db502e20dd981ef0d67850e1a')
                .phoneNumbers
                .create({phoneNumberSid: 'PN2a0747eba6abf96b7e3c3ff0b4530f6e'})
                .then(phone_number => console.log(phone_number.sid))
                .done();
