// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand.services('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .queries('UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .fetch({
                            serviceSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            sid: 'UHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                          })
                         .then(query => console.log(query.accountSid))
                         .done();
