# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

task_queue = client.taskrouter \
                   .workspaces("WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                   .task_queues("WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                   .update(target_workers="languages HAS \"english\"")

print(task_queue.account_sid)
