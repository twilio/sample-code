# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body='Hey Mr Nugget, you the bomb!',
                              from_='+15005550006',
                              to='+15005550009'
                          )

print(message.sid)
