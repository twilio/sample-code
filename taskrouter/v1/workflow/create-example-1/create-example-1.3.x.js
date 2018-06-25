// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .workflows
      .create({
         assignmentCallbackUrl: 'http://example.com',
         fallbackAssignmentCallbackUrl: 'http://example2.com',
         taskReservationTimeout: 30,
         friendlyName: 'Sales, Marketing, Support Workflow',
         configuration: JSON.stringify({
           task_routing: {
               filters: [
                 {
                     expression: `type=='sales'`,
                     targets: [
                       {
                           queue: 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                       }
                     ]
                 },
                 {
                     expression: `type=='marketing'`,
                     targets: [
                       {
                           queue: 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                       }
                     ]
                 },
                 {
                     expression: `type=='support'`,
                     targets: [
                       {
                           queue: 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                       }
                     ]
                 }
               ],
               default_filter: {
                   queue: 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
               }
           }
       })
       })
      .then(workflow => console.log(workflow.sid))
      .done();
