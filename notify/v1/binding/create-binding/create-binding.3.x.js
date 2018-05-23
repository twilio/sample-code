// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .bindings
             .create({
                endpoint: 'endpoint_id',
                tag: 'new user',
                identity: '00000001',
                bindingType: 'apn',
                address: 'device_token'
              })
             .then(binding => console.log(binding.sid))
             .done();
