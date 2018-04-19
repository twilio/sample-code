// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.marketplace
              .installedAddOns('XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .remove()
              .then(installed_add_on => console.log(installed_add_on.sid))
              .done();
