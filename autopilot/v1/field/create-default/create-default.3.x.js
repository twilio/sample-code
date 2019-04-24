// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                .fields
                .create({fieldType: 'field_type', uniqueName: 'unique_name'})
                .then(field => console.log(field.sid));
