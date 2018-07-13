# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

execution_step_context = client.studio \
    .flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .step_context() \
    .fetch()

print(execution_step_context.context)
