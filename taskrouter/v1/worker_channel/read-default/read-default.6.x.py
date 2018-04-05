# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

worker_channels = client.taskrouter \
                        .workspaces("WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                        .workers("WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                        .worker_channels \
                        .list()

for record in worker_channels:
    print(record.sid)
