// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.services('MG2172dd2db502e20dd981ef0d67850e1a')
                .phoneNumbers('PN557ce644e5ab84fa21cc21112e22c485')
                .remove()
                .then(phone_number => console.log(phone_number.sid));
