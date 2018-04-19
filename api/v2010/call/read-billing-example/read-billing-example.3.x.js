// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls.each({
               startTime: new Date(Date.UTC(2018, 0, 15, 0, 0, 0))
             },
                 calls => console.log(calls.sid)
             );
