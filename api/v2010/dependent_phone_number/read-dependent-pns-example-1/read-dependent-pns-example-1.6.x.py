# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

dependent_phone_numbers = client \
    .addresses('AD2a0747eba6abf96b7e3c3ff0b4530f6e') \
    .dependent_phone_numbers \
    .list()

for record in dependent_phone_numbers:
    print(record.sid)
