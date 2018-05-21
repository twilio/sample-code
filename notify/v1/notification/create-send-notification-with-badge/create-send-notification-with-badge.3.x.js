// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .notifications
             .create({apn: {
                  aps: {
                      alert: {
                          title: 'Bob alert',
                          body: 'Bob, you just received a badge'
                      },
                      badge: 1
                  }
              }, identity: '00000001'})
             .then(notification => console.log(notification.sid))
             .done();
