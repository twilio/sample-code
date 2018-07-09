# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

model_build = client.preview \
                    .understand \
                    .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .model_builds('UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .update(unique_name='unique_name')

print(model_build.unique_name)
