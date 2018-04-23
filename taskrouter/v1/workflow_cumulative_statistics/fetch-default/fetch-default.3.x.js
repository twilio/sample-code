// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .workflows('WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .cumulativeStatistics()
  .fetch()
  .then(workflow_cumulative_statistics => console.log(workflow_cumulative_statistics.avgTaskAcceptanceTime))
  .done();
