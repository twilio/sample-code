// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.video.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .publishedTracks('MTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .fetch({
               roomSid: 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
               participantSid: 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
               sid: 'MTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
             })
            .then(published_track => console.log(published_track.sid))
            .done();
