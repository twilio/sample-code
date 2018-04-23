// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.recordings
      .each({
         dateCreatedBefore: new Date(Date.UTC(2016, 9, 15, 0, 0, 0)),
         dateCreatedAfter: new Date(Date.UTC(2016, 9, 12, 0, 0, 0))
       },
           recordings => console.log(recordings.sid)
       );
