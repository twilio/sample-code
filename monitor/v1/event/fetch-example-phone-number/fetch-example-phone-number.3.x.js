// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.monitor.events('AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
              .fetch()
              .then(event => console.log(event.sid))
              .done();
