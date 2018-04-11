// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.queues('QUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .update({maxSize: 123, sid: 'QU32a3c49700934481addd5ce1659f04d2'})
      .then(queue => console.log(queue.accountSid))
      .done();
