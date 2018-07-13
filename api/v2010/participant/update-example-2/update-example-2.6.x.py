# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

participant = client.conferences('CFbbe4632a3c49700934481addd5ce1659') \
                    .participants('CA386025c9bf5d6052a1d1ea42b4d16662') \
                    .update(hold=True, hold_url='http://www.myapp.com/hold')

print(participant.call_sid)
