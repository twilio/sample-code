# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

assigned_add_on_extension = client \
    .incoming_phone_numbers('PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .assigned_add_ons('XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .extensions('XFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .fetch()

print(assigned_add_on_extension.friendly_name)
