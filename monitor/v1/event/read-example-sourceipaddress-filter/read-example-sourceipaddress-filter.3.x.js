// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.monitor.events.each({
                        endDate: new Date(Date.UTC(2015, 3, 25, 0, 0, 0)),
                        sourceIpAddress: '104.14.155.29',
                        startDate: new Date(Date.UTC(2015, 3, 25, 0, 0, 0))
                      },
                          events => console.log(events.sid)
                      );
