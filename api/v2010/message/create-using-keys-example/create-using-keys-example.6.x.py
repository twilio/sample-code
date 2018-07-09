# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
api_key = 'SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
api_secret = 'your_api_secret'
client = Client(api_key, api_secret, account_sid)

message = client.messages.create(
                              body='Never gonna give you up.',
                              from_='+15017122661',
                              to='+15558675310'
                          )

print(message.sid)
