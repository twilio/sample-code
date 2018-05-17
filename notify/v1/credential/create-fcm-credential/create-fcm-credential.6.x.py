# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

credential = client.notify.credentials.create(
                                           friendly_name='MyFCMCredential',
                                           secret='fcm_secret',
                                           type='fcm'
                                       )

print(credential.sid)
