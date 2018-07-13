// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.deployed_devices
              .fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .update({friendlyName: 'My New Fleet of Devices'})
              .then(fleet => console.log(fleet.uniqueName))
              .done();
