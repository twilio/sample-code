// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.credentials
             .create({
                friendlyName: 'MyFCMCredential',
                secret: 'fcm_secret',
                type: 'fcm'
              })
             .then(credential => console.log(credential.sid))
             .done();
