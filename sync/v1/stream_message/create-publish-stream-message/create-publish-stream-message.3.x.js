// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncStreams('TOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .streamMessages
           .create({data: {
                id: 'bob',
                x: 256,
                y: 42
            }})
           .then(stream_message => console.log(stream_message.sid))
           .done();
