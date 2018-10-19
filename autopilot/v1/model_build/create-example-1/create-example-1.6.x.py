# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

model_build = client.autopilot \
                    .assistants('assistant_unique_name') \
                    .model_builds \
                    .create(unique_name='v0.1')

print(model_build.sid)
