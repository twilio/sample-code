// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.trunking.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
               .credentialsLists('CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
               .fetch()
               .then(credential_list => console.log(credential_list.sid))
               .done();
