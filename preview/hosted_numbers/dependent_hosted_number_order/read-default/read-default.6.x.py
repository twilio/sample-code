# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

dependent_hosted_number_orders = client.preview \
    .hosted_numbers \
    .authorization_documents('PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .dependent_hosted_number_orders \
    .list(limit=20)

for record in dependent_hosted_number_orders:
    print(record.sid)
