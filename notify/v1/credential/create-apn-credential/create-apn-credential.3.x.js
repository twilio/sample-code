// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.credentials
             .create({
                certificate: 'cert.pem_content',
                friendlyName: 'MyAPNCredential',
                privateKey: 'key.pem_content',
                sandbox: true,
                type: 'apn'
              })
             .then(credential => console.log(credential.sid))
             .done();
