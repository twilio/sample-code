// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.conferences('CFbbe46ff1274e283f7e3ac1df0072ab39')
      .update({announceUrl: 'http://www.myapp.com/announce'})
      .then(conference => console.log(conference.friendlyName))
      .done();
