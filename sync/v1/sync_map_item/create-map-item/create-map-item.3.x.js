// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncMapItems
           .create({ttl: 864000, key: 'steph_curry', data: {
                name: 'Stephen Curry',
                level: 30,
                username: 'spicy_curry'
            }})
           .then(sync_map_item => console.log(sync_map_item.key))
           .done();
