// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.queues('QUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .members('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .fetch({
         callSid: 'CA386025c9bf5d6052a1d1ea42b4d16662',
         queueSid: 'QU5ef8732a3c49700934481addd5ce1659'
       })
      .then(member => console.log(member.callSid))
      .done();
