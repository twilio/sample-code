// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .notifications
             .create({
                apn: {
                  aps: {
                      alert: {
                          title: 'Short title for Watch.'
                      }
                  }
              },
                body: 'This is the body for all Bindings',
                data: {
                  custom_key1: 'custom value 1',
                  custom_key2: 'custom value 2'
              },
                fcm: {
                  notification: {
                      title: 'New alert',
                      body: 'Hello Bob!'
                  }
              },
                identity: '00000001',
                title: 'Generic loooooooong title for all Bindings'
              })
             .then(notification => console.log(notification.sid))
             .done();
