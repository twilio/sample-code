// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .syncLists('ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .syncListPermissions('identity')
  .remove()
  .then(sync_list_permission => console.log(sync_list_permission.serviceSid))
  .done();
