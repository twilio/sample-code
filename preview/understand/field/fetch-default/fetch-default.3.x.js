// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand.services('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .fields('UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .fetch({
                            serviceSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            sid: 'UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                          })
                         .then(field => console.log(field.accountSid))
                         .done();
