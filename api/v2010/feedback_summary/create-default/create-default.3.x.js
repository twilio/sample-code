// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls.feedbackSummaries
            .create({
               startDate: new Date(Date.UTC(2008, 0, 2)),
               endDate: new Date(Date.UTC(2008, 0, 2))
             })
            .then(feedback_summary => console.log(feedback_summary.sid))
            .done();
