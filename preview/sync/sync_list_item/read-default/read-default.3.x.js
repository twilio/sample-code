// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .syncLists('ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .syncListItems
      .list({limit: 20})
      .then(syncListItems => syncListItems.forEach(s => console.log(s.index)));
