// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sip.domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .credentialListMappings('CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .remove()
  .then(credential_list_mapping => console.log(credential_list_mapping.sid))
  .done();
