// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
           .syncStreams('TOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
           .streamMessages
           .create({data: `{"id": "bob", "x": 256, "y": 42}`})
           .then(stream_message => console.log(stream_message.sid))
           .done();
