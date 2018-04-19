// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.video.rooms
            .create({
               statusCallback: 'http://example.org',
               type: 'group',
               uniqueName: 'DailyStandupWithH264Codec',
               videoCodecs: 'H264'
             })
            .then(room => console.log(room.sid))
            .done();
