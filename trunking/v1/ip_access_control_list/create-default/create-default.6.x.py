# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

ip_access_control_list = client.trunking \
    .trunks("TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .ip_access_control_lists \
    .create(ip_access_control_list_sid="ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

print(ip_access_control_list.sid)
