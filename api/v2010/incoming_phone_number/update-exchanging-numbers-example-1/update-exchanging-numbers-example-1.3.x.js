// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.incomingPhoneNumbers('PNyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
  .update({accountSid: 'ACzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'})
  .then(incoming_phone_number => console.log(incoming_phone_number.friendlyName));
