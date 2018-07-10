# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body='Hello there!',
                              from_='+15555555555',
                              media_url='https://demo.twilio.com/owl.png',
                              to='+12316851234'
                          )

print(message.sid)
