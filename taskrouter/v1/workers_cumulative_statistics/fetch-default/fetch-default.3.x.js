// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .workers('WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .cumulativeStatistics()
  .fetch()
  .then(workers_cumulative_statistics => console.log(workers_cumulative_statistics.startTime))
  .done();
