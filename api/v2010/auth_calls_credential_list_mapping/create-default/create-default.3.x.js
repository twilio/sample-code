// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sip.domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .auth
  .calls
  .credentialListMappings
  .create({credentialListSid: 'CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'})
  .then(auth_calls_credential_list_mapping => console.log(auth_calls_credential_list_mapping.sid));
