# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

user_channel = client.chat \
                     .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .user_channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .update(notification_level='default')

print(user_channel.service_sid)
