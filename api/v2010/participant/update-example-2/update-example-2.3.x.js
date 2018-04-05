// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .participants('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .update({hold: true, holdUrl: 'http://www.myapp.com/hold'})
      .then(participant => console.log(participant.accountSid))
      .done();
