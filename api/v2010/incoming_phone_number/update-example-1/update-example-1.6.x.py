# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

incoming_phone_number = client \
    .incoming_phone_numbers('PN2a0747eba6abf96b7e3c3ff0b4530f6e') \
    .update(
         account_sid='ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         sms_url='http://demo.twilio.com/docs/sms.xml',
         voice_url='http://demo.twilio.com/docs/voice.xml'
     )

print(incoming_phone_number.friendly_name)
