# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'AC054ec43cfaa36594f0513cde64f4157b'
auth_token = '0b888f1b4235fa93fb9397515047d78c'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Join Earth's mightiest heroes. Like Kevin Bacon.",
                     from_='+12107872178',
                     to='+8613333345797'
                 )

print(message.sid)
