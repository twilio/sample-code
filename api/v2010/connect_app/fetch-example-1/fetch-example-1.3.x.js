// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.connectApps('CNb989fdd207b04d16aee578018ef5fd93')
      .fetch()
      .then(connect_app => console.log(connect_app.companyName))
      .done();
