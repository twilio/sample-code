# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

samples = client.preview.understand \
                        .services("UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                        .intents("UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                        .samples \
                        .list()

for record in samples:
    print(record.sid)
