# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

ip_addresses = client.sip \
    .ip_access_control_lists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .ip_addresses \
    .list()

for record in ip_addresses:
    print(record.sid)
