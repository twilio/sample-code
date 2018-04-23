// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.transcriptions('TR8c61027b709ffb038236612dc5af8723')
      .fetch()
      .then(transcription => console.log(transcription.dateCreated))
      .done();
