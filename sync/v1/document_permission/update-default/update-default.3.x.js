// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .documents('ETXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .documentPermissions('identity')
  .update({read: true, write: true, manage: true})
  .then(document_permission => console.log(document_permission.serviceSid));
