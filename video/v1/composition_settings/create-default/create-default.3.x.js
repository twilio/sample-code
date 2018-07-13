// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.video.compositionSettings()
  .create({friendlyName: 'friendlyName'})
  .then(composition_settings => console.log(composition_settings.friendlyName))
  .done();
