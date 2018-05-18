# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import datetime
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

recordings = client.recordings \
                   .list(
                        date_created_before=datetime(2016, 10, 15, 0, 0),
                        date_created_after=datetime(2016, 10, 12, 0, 0)
                    )

for record in recordings:
    print(record.sid)
