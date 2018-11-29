# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

recording_settings = client.video \
    .recording_settings() \
    .create(
         encryption_enabled=True,
         encryption_key_sid='CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         friendly_name='Upload encrypted'
     )

print(recording_settings.friendly_name)
