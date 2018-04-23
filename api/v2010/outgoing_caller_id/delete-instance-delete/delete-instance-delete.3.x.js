// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.outgoingCallerIds('PNe536d32a3c49700934481addd5ce1659')
      .remove()
      .then(outgoing_caller_id => console.log(outgoing_caller_id.sid))
      .done();
