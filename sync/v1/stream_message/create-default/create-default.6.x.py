# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

stream_message = client.sync \
                       .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                       .sync_streams('TOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                       .stream_messages \
                       .create(data={})

print(stream_message.sid)
