# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

incoming_phone_number = client \
    .incoming_phone_numbers('PNyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy') \
    .update(account_sid='ACzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')

print(incoming_phone_number.friendly_name)
