// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
             .users('NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
             .bindings
             .create({bindingType: 'apn', address: 'address'})
             .then(user_binding => console.log(user_binding.sid))
             .done();
