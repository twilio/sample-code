# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

ip_access_control_lists = client.trunking \
                                .trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                                .ip_access_control_lists \
                                .list()

for record in ip_access_control_lists:
    print(record.sid)
