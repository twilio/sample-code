# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

hosted_number_order = client.preview \
    .hosted_numbers \
    .hosted_number_orders('HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .update(friendly_name='friendly_name')

print(hosted_number_order.friendly_name)
