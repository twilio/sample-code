# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

ip_access_control_list = client.trunking \
    .trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .ip_access_control_lists \
    .create(ip_access_control_list_sid='ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

print(ip_access_control_list.sid)
