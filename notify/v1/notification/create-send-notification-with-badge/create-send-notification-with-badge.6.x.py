# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

notification = client.notify \
                     .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .notifications \
                     .create(apn={
                          'aps': {
                              'alert': {
                                  'title': 'Bob alert',
                                  'body': 'Bob, you just received a badge'
                              },
                              'badge': 1
                          }
                      }, identity='00000001')

print(notification.sid)
