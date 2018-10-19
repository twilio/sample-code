// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('test-unique-name-instead')
                .tasks
                .create({
                   friendlyName: 'tell a joke',
                   uniqueName: 'tell-a-joke'
                 })
                .then(task => console.log(task.sid))
                .done();
