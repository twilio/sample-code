# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

task_queue = client.taskrouter \
    .workspaces("WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .task_queues \
    .create(
         assignment_activity_sid="WA21d51f4c72583766988f9860de3e130a",
         friendly_name="English",
         reservation_activity_sid="WAea296a56ebce4bfbff0e99abadf16934",
         target_workers="languages HAS \"english\""
     )

print(task_queue.sid)
