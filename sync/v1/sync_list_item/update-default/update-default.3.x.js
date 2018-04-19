// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncLists('ESXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .syncListItems(1)
           .update({data: {}})
           .then(sync_list_item => console.log(sync_list_item.index))
           .done();
