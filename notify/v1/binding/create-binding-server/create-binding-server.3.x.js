// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .bindings
             .create({
                endpoint: 'XXXXXXXXXXXXXXX',
                tag: 'premium',
                address: 'gcm_device_token',
                bindingType: 'gcm',
                identity: '00000001'
              })
             .then(binding => console.log(binding.sid))
             .done();
