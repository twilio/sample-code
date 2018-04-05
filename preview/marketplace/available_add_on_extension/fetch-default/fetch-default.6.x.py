# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

available_add_on_extension = client.preview.marketplace \
    .available_add_ons("XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .extensions("XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .fetch()

print(available_add_on_extension.sid)
