# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
from datetime import date


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

conferences = client.conferences.list(
    status="in-progress", date_created_after=date(2009, 7, 6)
)

for record in conferences:
    print(record.sid)
