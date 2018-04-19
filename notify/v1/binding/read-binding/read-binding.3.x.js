// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .bindings
             .each({
                startDate: new Date(Date.UTC(2015, 7, 25)),
                tag: 'new user'
              },
                  bindings => console.log(bindings.sid)
              );
