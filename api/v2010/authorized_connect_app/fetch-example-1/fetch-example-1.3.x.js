// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.authorizedConnectApps('CN47260e643654388faabe8aaa18ea6756')
  .fetch()
  .then(authorized_connect_app => console.log(authorized_connect_app.connectAppCompanyName))
  .done();
