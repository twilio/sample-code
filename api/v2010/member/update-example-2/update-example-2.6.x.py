# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

member = client.queues('QU5ef8732a3c49700934481addd5ce1659') \
               .members('CA5ef8732a3c49700934481addd5ce1659') \
               .update(
                    url='http://demo.twilio.com/docs/voice.xml',
                    method='POST'
                )

print(member.call_sid)
