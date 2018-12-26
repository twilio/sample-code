# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACee1482b81269ae1bab0a0313af59f914'
auth_token = '6c7a846b153f3829b0e50fa4c5861ceb'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Testing 1,2,3",
                     from_='+61488846562',
                     to='+61488824269'
                 )

print(message.sid)
