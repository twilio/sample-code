# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import json


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

notification = client.notify \
                     .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .notifications \
                     .create(body='Hello Bob', to_binding=json.dumps({
                          'binding_type': 'sms',
                          'address': '+15555555555'
                      }), identity=['identity'])

print(notification.sid)
