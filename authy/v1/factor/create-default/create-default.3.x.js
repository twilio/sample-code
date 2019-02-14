// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.authy.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .entities('identity')
            .factors
            .create({
               binding: 'binding',
               friendlyName: 'friendlyName',
               factorType: 'app-push'
             })
            .then(factor => console.log(factor.sid));
