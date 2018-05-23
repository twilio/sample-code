# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Let's grab lunch at Milliways tomorrow!",
                     from_='+14158141829',
                     media_url='http://www.example.com/cheeseburger.png',
                     to='+15558675310'
                 )

print(message.sid)
