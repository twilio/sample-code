# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

ip_address = client.sip \
    .ip_access_control_lists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .ip_addresses('IPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .update(ip_address='ip_address')

print(ip_address.friendly_name)
