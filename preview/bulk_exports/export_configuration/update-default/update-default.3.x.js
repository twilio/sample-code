// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.bulk_exports
      .exportConfiguration('resourceType')
      .update({enabled: true})
      .then(export_configuration => console.log(export_configuration.enabled))
      .done();
