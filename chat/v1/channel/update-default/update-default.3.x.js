// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.chat.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .update({friendlyName: 'friendlyName'})
              .then(channel => console.log(channel.friendlyName));
