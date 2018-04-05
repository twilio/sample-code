# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

worker_channel = client.taskrouter \
                       .workspaces("WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                       .workers("WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                       .worker_channels("WCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                       .update(capacity=1)

print(worker_channel.sid)
