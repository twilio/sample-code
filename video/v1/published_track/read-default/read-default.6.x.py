# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

published_tracks = client.video \
                         .rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                         .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                         .published_tracks \
                         .list()

for record in published_tracks:
    print(record.sid)
