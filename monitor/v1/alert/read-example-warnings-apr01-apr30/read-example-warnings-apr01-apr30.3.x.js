// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.monitor.alerts.each({
                        endDate: new Date(Date.UTC(2015, 3, 30)),
                        logLevel: 'warning',
                        startDate: new Date(Date.UTC(2015, 3, 1))
                      },
                          alerts => console.log(alerts.sid)
                      );
