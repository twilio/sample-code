# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

composition_settings = client.video \
    .composition_settings() \
    .create(
         aws_s3_url='AwsS3Url=https://my-bucket.s3.amazonaws.com/recordings',
         aws_storage_enabled=True,
         aws_credentials_sid='CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         encryption_enabled=True,
         encryption_key_sid='CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         friendly_name='Upload encrypted'
     )

print(composition_settings.friendly_name)
