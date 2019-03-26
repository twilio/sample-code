# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

composition_settings = client.video \
    .composition_settings() \
    .create(
         aws_s3_url='https://my-bucket.s3.amazonaws.com/recordings',
         aws_storage_enabled=True,
         aws_credentials_sid='CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         friendly_name='Upload to external bucket'
     )

print(composition_settings.friendly_name)
