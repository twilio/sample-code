// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncStreams('TOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .fetch({
              serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              sid: 'TOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
            })
           .then(sync_stream => console.log(sync_stream.sid))
           .done();
