# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import datetime
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

messages = client.messages.list(
                               date_sent=datetime(2016, 8, 31, 0, 0),
                               from_='+15017122661',
                               to='+15558675310'
                           )

for record in messages:
    print(record.sid)
