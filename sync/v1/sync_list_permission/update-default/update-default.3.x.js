// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .syncLists('ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .syncListPermissions('identity')
  .update({read: true, write: true, manage: true})
  .then(sync_list_permission => console.log(sync_list_permission.serviceSid));
