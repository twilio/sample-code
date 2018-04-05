// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                         .fieldTypes('UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                         .fieldValues('UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                         .remove()
                         .then(field_value => console.log(field_value.sid))
                         .done();
