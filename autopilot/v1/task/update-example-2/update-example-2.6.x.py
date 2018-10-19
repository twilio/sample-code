# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

task = client.autopilot.assistants('assistant_unique_name') \
    .tasks('task_unique_name') \
    .update(actions={
         'actions': [
             {
                 'say': {
                     'speech': 'I was going to look for my missing watch, but I could never find the time.'
                 }
             }
         ]
     })

print(task.friendly_name)
