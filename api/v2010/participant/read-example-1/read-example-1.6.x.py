# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

participants = client.conferences('CFbbe4632a3c49700934481addd5ce1659') \
                     .participants \
                     .list(limit=20)

for record in participants:
    print(record.call_sid)
