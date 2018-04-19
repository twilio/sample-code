// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages.each({
                  dateSent: new Date(Date.UTC(2016, 7, 31, 0, 0, 0)),
                  from: '+15017122661',
                  to: '+15558675310'
                },
                    messages => console.log(messages.sid)
                );
