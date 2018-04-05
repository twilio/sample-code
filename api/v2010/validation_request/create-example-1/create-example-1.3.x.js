// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.validationRequests
      .create({
         phoneNumber: '+14158675310',
         friendlyName: 'My Home Phone Number'
       })
      .then(validation_request => console.log(validation_request.accountSid))
      .done();
