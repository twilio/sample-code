// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.monitor.events
              .list({
                 actorSid: 'USd0afd67cddff4ec7cb0022771a203cb1',
                 resourceSid: 'PN4aa51b930717ea83c91971b86d99018f',
                 limit: 20
               })
              .then(events => events.forEach(e => console.log(e.sid)));
