// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .messageInteractions
            .create({body: 'Reply to this message to chat!'})
            .then(message_interaction => console.log(message_interaction.sid))
            .done();
