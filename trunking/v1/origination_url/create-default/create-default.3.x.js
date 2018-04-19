// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.trunking.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
               .originationUrls
               .create({
                  weight: 1,
                  priority: 1,
                  enabled: true,
                  friendlyName: 'friendlyName',
                  sipUrl: 'https://example.com'
                })
               .then(origination_url => console.log(origination_url.sid))
               .done();
