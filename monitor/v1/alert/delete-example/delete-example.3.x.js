// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.monitor.alerts('NO5a7a84730f529f0a76b3e30c01315d1a')
              .remove()
              .then(alert => console.log(alert.sid))
              .done();
