# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

task_queue_cumulative_statistics = client.taskrouter \
    .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .task_queues('WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .cumulative_statistics() \
    .fetch()

print(task_queue_cumulative_statistics.avg_task_acceptance_time)
