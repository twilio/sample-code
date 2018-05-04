// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls.each({
               startTimeBefore: new Date(Date.UTC(2009, 6, 6, 0, 0, 0)),
               startTimeAfter: new Date(Date.UTC(2009, 6, 4, 0, 0, 0)),
               status: 'in-progress'
             },
                 calls => console.log(calls.sid)
             );
