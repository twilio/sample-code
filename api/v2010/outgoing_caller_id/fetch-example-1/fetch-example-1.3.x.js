// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.outgoingCallerIds('PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .fetch({sid: 'PNe905d7e6b410746a0fb08c57e5a186f3'})
      .then(outgoing_caller_id => console.log(outgoing_caller_id.sid))
      .done();
