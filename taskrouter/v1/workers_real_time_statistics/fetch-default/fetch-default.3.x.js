// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .workers('WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .realTimeStatistics()
  .fetch()
  .then(workers_real_time_statistics => console.log(workers_real_time_statistics.activityStatistics))
  .done();
