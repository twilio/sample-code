# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

service = client.notify.services \
                .create(
                     apn_credential_sid='CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                     fcm_credential_sid='CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                     friendly_name='My Awesome Service'
                 )

print(service.sid)
