# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

address = client.addresses.create(
                               customer_name='customer_name',
                               street='street',
                               city='city',
                               region='region',
                               postal_code='postal_code',
                               iso_country='US'
                           )

print(address.sid)
