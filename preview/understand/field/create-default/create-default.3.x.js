// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand.services('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .fields
                         .create({
                            serviceSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            fieldType: 'fieldType',
                            uniqueName: 'uniqueName'
                          })
                         .then(field => console.log(field.sid))
                         .done();
