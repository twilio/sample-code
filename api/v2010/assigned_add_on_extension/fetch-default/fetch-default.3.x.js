// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.incomingPhoneNumbers('PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .assignedAddOns('XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .extensions('XFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .fetch({
     resourceSid: 'PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     assignedAddOnSid: 'XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     sid: 'XFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
   })
  .then(assigned_add_on_extension => console.log(assigned_add_on_extension.sid))
  .done();
