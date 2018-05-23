# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import json


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

task = client.taskrouter.workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                        .tasks \
<<<<<<< Updated upstream
                        .create(
                             attributes="{\"type\":\"support\"}",
                             workflow_sid="WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                         )
=======
                        .create(attributes=json.dumps({
                             'type': 'support'
                         }), workflow_sid='WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
>>>>>>> Stashed changes

print(task.sid)
