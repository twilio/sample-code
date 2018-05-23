# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

workspace = client.taskrouter \
                  .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                  .update(
                       event_callback_url='http://requestb.in/vh9reovh',
                       friendly_name='NewFriendlyName'
                   )

print(workspace.default_activity_name)
