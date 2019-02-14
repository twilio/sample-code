// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .tasks('tell-a-joke')
  .taskActions()
  .update({actions: {
       say: 'I was going to look for my missing watch, but I could never find the time.'
   }})
  .then(task_actions => console.log(task_actions.assistantSid));
