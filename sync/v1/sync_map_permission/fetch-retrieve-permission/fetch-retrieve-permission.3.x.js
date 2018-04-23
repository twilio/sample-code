// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .syncMapPermissions('bob')
      .fetch()
      .then(sync_map_permission => console.log(sync_map_permission.serviceSid))
      .done();
