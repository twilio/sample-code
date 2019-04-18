// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.monitor.events
              .list({
                 endDate: new Date(Date.UTC(2015, 3, 25, 0, 0, 0)),
                 sourceIpAddress: '104.14.155.29',
                 startDate: new Date(Date.UTC(2015, 3, 25, 0, 0, 0)),
                 limit: 20
               })
              .then(events => events.forEach(e => console.log(e.sid)));
