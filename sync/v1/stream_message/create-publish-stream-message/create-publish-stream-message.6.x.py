# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

stream_message = client.sync.services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                       .sync_streams("TOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                       .stream_messages \
                       .create(data={"id": "bob", "x": 256, "y": 42})

print(stream_message.sid)
