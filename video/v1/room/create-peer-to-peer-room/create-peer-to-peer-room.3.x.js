// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.video.rooms
            .create({
               enableTurn: true,
               statusCallback: 'http://example.org',
               type: 'peer-to-peer',
               uniqueName: 'DailyStandup'
             })
            .then(room => console.log(room.sid))
            .done();
