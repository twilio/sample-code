# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

task_actions = client.autopilot \
    .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .tasks('tell-a-joke') \
    .task_actions() \
    .update(actions={
         'say': 'I was going to look for my missing watch, but I could never find the time.'
     })

print(task_actions.assistant_sid)
