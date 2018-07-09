# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

usage_records = client.wireless \
                      .sims('DEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .usage_records \
                      .list()

for record in usage_records:
    print(record.sim_sid)
