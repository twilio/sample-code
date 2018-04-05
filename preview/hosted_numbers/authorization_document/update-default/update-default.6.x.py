# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

authorization_document = client.preview.hosted_numbers \
    .authorization_documents("PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .update(hosted_number_order_sids=['hosted_number_order_sids'])

print(authorization_document.sid)
