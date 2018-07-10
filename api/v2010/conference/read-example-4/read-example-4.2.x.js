// Download the Node helper library from twilio.com/docs/node/install
// Find your Account Sid and Auth Token at twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.conferences.list(
  {
    status: 'in-progress',
    'dateCreated>': '2009-07-06',
  },
  (err, data) => {
    data.conferences.forEach(conference => {
      console.log(conference.Status);
    });
  }
);
