// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.sessions('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                .participants
                .create({
                   userAddress: '+1847234xxxx',
                   twilioAddress: `<YOUR COMPANY'S PHONE NUMBER VIA TWILIO>`
                 })
                .then(participant => console.log(participant.sid));
