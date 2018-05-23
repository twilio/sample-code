# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = '"ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

address = client.addresses.create(
<<<<<<< Updated upstream
                               friendly_name="Billing - Customer 123",
                               city="Berlin",
                               customer_name="Customer 123",
                               iso_country="DE",
                               postal_code="10875",
                               region="Berlin",
                               street="1 Hasselhoff Lane"
=======
                               friendly_name='Billing - Customer 123',
                               customer_name='Customer 123',
                               street='1 Hasselhoff Lane',
                               city='Berlin',
                               region='Berlin',
                               postal_code='10875',
                               iso_country='DE'
>>>>>>> Stashed changes
                           )

print(address.sid)
