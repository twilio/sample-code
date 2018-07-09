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
                     .create(
                          body='Knok-Knok! This is your first Notify SMS',
                          to_binding=json.dumps({
                              'binding_type': 'sms',
                              'address': '+1651000000000'
                          }),
                          identity=['identity']
                      )

print(notification.sid)
