// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services
            .create({
               callbackUrl: 'https://www.example.com/',
               uniqueName: 'My Awesome Service'
             })
            .then(service => console.log(service.sid))
            .done();
