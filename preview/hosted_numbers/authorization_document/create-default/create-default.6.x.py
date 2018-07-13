# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

authorization_document = client.preview \
    .hosted_numbers \
    .authorization_documents \
    .create(
         hosted_number_order_sids=['hosted_number_order_sids'],
         address_sid='ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         email='email',
         contact_title='contact_title',
         contact_phone_number='contact_phone_number'
     )

print(authorization_document.sid)
