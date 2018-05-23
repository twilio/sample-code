# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

trigger = client.usage.triggers \
                      .create(
                           callback_url='https://example.com',
                           trigger_value='trigger_value',
                           usage_category='answering-machine-detection'
                       )

print(trigger.sid)
