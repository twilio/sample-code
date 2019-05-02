# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

stream_message = client.sync \
                       .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                       .sync_streams('MyStream') \
                       .stream_messages \
                       .create(data={
                            'id': 'bob',
                            'x': 256,
                            'y': 42
                        })

print(stream_message.sid)
