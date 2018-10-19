// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('quickstart-assistant')
                .queries
                .create({language: 'en-US', query: 'Tell me a joke'})
                .then(query => console.log(query.sid))
                .done();
