// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.sessions
                .create({
                   messagingServiceSid: 'MG2172dd2db502e20dd981ef0d67850e1a'
                 })
                .then(session => console.log(session.sid));
