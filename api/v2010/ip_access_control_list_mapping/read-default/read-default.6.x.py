# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

ip_access_control_list_mappings = client.sip \
    .domains("SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .ip_access_control_list_mappings \
    .list()

for record in ip_access_control_list_mappings:
    print(record.sid)
