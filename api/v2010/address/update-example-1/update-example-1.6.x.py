# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

address = client.addresses("ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                .update(
                     customer_name="Customer 456",
                     street="2 Hasselhoff Lane"
                 )

print(address.sid)
