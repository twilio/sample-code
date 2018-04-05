// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.lookups.phoneNumbers('+15017122661')
      .fetch({addOns: 'payfone_tcpa_compliance', addOnsData: {
           "payfone_tcpa_compliance.right_party_contacted_date": "20160101"
       }, type: 'carrier'})
      .then(phone_number => console.log(phone_number.callerName))
      .done();
