// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .documents('MyFirstDocument')
      .documentPermissions('bob')
      .update({manage: false, read: true, write: true})
      .then(document_permission => console.log(document_permission.serviceSid))
      .done();
