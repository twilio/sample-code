// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sip.domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .ipAccessControlListMappings('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .fetch()
  .then(ip_access_control_list_mapping => console.log(ip_access_control_list_mapping.friendlyName));
