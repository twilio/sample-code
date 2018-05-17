# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import datetime
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

calls = client.calls.list(
                         start_time_before=datetime(2009, 7, 6, 0, 0),
                         start_time_after=datetime(2009, 7, 4, 0, 0),
                         status='in-progress'
                     )

for record in calls:
    print(record.sid)
