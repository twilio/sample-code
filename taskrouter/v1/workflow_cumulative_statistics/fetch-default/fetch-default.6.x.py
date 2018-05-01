# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

workflow_cumulative_statistics = client.taskrouter \
    .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .workflows('WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .cumulative_statistics() \
    .fetch()

print(workflow_cumulative_statistics.avg_task_acceptance_time)
