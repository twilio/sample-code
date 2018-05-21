// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .bindings
             .create({
                endpoint: 'XXXXXXXXXXXXXXX',
                tag: 'preferred device',
                identity: '00000001',
                bindingType: 'fcm',
                address: 'fcm_device_token'
              })
             .then(binding => console.log(binding.sid))
             .done();
