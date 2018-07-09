# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

installed_add_on = client.preview \
    .marketplace \
    .installed_add_ons \
    .create(
         available_add_on_sid='XBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         accept_terms_of_service=True
     )

print(installed_add_on.sid)
