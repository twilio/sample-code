# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import json


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

worker = client.taskrouter \
               .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
               .workers \
               .create(attributes=json.dumps({
                    'type': 'support'
                }), friendly_name='Support Worker 1')

print(worker.sid)
