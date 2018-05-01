# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

incoming_phone_number = client.incoming_phone_numbers \
    .create(
         friendly_name='My Company Line',
         phone_number='+15105647903',
         voice_method='GET',
         voice_url='http://demo.twilio.com/docs/voice.xml'
     )

print(incoming_phone_number.sid)
