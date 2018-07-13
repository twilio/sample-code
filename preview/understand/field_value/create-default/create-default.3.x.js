// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand
              .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .fieldValues
              .create({language: 'language', value: 'value'})
              .then(field_value => console.log(field_value.sid))
              .done();
