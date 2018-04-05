// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .syncMaps('MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .syncMapPermissions('identity')
      .fetch()
      .then(sync_map_permission => console.log(sync_map_permission.accountSid))
      .done();
