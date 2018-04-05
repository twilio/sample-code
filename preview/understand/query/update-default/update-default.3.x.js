// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                         .queries('UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                         .update({
                            sampleSid: 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                          })
                         .then(query => console.log(query.sid))
                         .done();
