// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.pricing.voice.numbers('+15017122661')
                    .fetch({originationNumber: '+15108675310'})
                    .then(number => console.log(number.outboundCallPrices));
