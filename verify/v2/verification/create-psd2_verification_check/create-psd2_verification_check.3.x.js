// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.verify.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .verifications
             .create({
                amount: '€39.99',
                payee: 'Acme Inc.',
                to: '+14159373912',
                channel: 'sms'
              })
             .then(verification => console.log(verification.sid));
