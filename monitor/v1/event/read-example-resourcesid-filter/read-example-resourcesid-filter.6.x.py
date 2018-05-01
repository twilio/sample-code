# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

events = client.monitor.events \
                       .list(resource_sid='PN4aa51b930717ea83c91971b86d99018f')

for record in events:
    print(record.sid)
