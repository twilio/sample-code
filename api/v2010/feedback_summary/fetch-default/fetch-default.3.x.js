// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls.feedbackSummaries('FSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .fetch()
            .then(feedback_summary => console.log(feedback_summary.callCount))
            .done();
