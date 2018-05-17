# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

add_on_results = client.recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                       .add_on_results \
                       .list()

for record in add_on_results:
    print(record.sid)
