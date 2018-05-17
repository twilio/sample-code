# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

participant = client.conferences('CFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .participants \
                    .create(from_='+15017122661', to='+15558675310')

print(participant.call_sid)
