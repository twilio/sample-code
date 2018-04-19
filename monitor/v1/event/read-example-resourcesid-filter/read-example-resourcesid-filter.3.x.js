// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.monitor.events.each({
                        resourceSid: 'PN4aa51b930717ea83c91971b86d99018f'
                      },
                          events => console.log(events.sid)
                      );
