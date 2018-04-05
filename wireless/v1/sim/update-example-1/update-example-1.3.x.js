// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.wireless.sims('DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .update({
     callbackMethod: 'POST',
     callbackUrl: 'https://sim-manager.mycompany.com/sim-update-callback/AliceSmithSmartMeter',
     status: 'active'
   })
  .then(sim => console.log(sim.sid))
  .done();
