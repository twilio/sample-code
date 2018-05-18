# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

dependent_hosted_number_orders = client.preview.hosted_numbers \
    .authorization_documents('PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .dependent_hosted_number_orders \
    .list()

for record in dependent_hosted_number_orders:
    print(record.sid)
