# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

installed_add_on_extension = client.preview.marketplace \
    .installed_add_ons("XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .extensions("XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .fetch()

print(installed_add_on_extension.sid)
