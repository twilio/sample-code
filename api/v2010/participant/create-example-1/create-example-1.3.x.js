// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.conferences('AgentConf12')
      .participants
      .create({from: '+18180021216', to: '+15624421212'})
      .then(participant => console.log(participant.callSid))
      .done();
