# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

address = client.addresses.create(
                               customer_name='Customer 500',
                               street='Elm Street',
                               city='Racoon',
                               region='Mordor',
                               postal_code='150',
                               iso_country='AX'
                           )

print(address.sid)
