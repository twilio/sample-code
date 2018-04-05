// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .syncMaps('MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .syncMapItems
  .create({
     data: `{"name": "Stephen Curry", "level": 30, "username": "spicy_curry"}`,
     key: 'steph_curry',
     ttl: 864000
   })
  .then(sync_map_item => console.log(sync_map_item.key))
  .done();
