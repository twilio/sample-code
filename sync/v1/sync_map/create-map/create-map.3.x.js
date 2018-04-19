// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncMaps
           .create({ttl: 1814400, uniqueName: 'Players'})
           .then(sync_map => console.log(sync_map.sid))
           .done();
