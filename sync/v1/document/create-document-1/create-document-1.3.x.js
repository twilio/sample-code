// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .documents
           .create({data: {
                date_updated: '2018-02-14 12:24:31.843662',
                movie_title: 'On The Line',
                show_times: [
                  '12:30:00Z',
                  '14:45:00Z',
                  '15:30:00Z',
                  '17:45:00Z'
                ],
                starring: [
                  'Lance Bass',
                  'Joey Fatone'
                ],
                genre: 'Romance'
            }, ttl: 1814400, uniqueName: 'MyFirstDocument'})
           .then(document => console.log(document.sid))
           .done();
