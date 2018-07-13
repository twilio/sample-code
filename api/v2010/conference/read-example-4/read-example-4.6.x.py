# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import date
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

conferences = client.conferences.list(
                                     date_created_after=date(2009, 7, 6),
                                     status='in-progress'
                                 )

for record in conferences:
    print(record.sid)
