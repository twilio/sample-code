# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

outgoing_caller_ids = client.outgoing_caller_ids \
                            .list(phone_number='+14158675310')

for record in outgoing_caller_ids:
    print(record.sid)
