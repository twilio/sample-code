// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
             .bindings
             .create({
                address: 'fcm_device_token',
                bindingType: 'fcm',
                identity: '00000001',
                endpoint: 'XXXXXXXXXXXXXXX',
                tag: 'preferred device'
              })
             .then(binding => console.log(binding.sid))
             .done();
