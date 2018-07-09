# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import json


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

workflow = client.taskrouter \
    .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .workflows \
    .create(
         assignment_callback_url='http://example.com',
         fallback_assignment_callback_url='http://example2.com',
         task_reservation_timeout=30,
         friendly_name='Sales, Marketing, Support Workflow',
         configuration=json.dumps({
             'task_routing': {
                 'filters': [
                     {
                         'expression': "type=='sales'",
                         'targets': [
                             {
                                 'queue': 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                             }
                         ]
                     },
                     {
                         'expression': "type=='marketing'",
                         'targets': [
                             {
                                 'queue': 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                             }
                         ]
                     },
                     {
                         'expression': "type=='support'",
                         'targets': [
                             {
                                 'queue': 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                             }
                         ]
                     }
                 ],
                 'default_filter': {
                     'queue': 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                 }
             }
         })
     )

print(workflow.sid)
