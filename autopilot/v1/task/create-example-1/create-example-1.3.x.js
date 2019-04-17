// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .tasks
  .create({friendlyName: 'tell-a-joke', actions: {
       actions: [
         {
             say: {
                 speech: 'I was going to look for my missing watch, but I could never find the time.'
             }
         }
       ]
   }, uniqueName: 'tell-a-joke'})
  .then(task => console.log(task.sid));
