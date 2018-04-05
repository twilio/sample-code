# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

invites = client.chat.v1.services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                        .channels("CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                        .invites \
                        .list()

for record in invites:
    print(record.sid)
