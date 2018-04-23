// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncLists('ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .fetch()
           .then(sync_list => console.log(sync_list.uniqueName))
           .done();
