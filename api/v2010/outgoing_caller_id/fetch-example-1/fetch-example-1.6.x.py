# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

outgoing_caller_id = client \
    .outgoing_caller_ids('PNe905d7e6b410746a0fb08c57e5a186f3') \
    .fetch()

print(outgoing_caller_id.friendly_name)
