// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand
  .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .intents('tell-a-joke')
  .intentActions()
  .update({actions: {
       say: 'I was going to look for my missing watch, but I could never find the time.'
   }})
  .then(intent_actions => console.log(intent_actions.assistantSid))
  .done();
