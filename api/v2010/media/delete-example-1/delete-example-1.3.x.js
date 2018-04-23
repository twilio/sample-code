// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages('MM800f449d0399ed014aae2bcc0cc2f2ec')
      .media('ME557ce644e5ab84fa21cc21112e22c485')
      .remove()
      .then(media => console.log(media.sid))
      .done();
