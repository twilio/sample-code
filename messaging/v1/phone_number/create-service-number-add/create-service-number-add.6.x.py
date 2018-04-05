# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

phone_number = client.messaging \
                     .services("MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                     .phone_numbers \
                     .create(
                          phone_number_sid="PN557ce644e5ab84fa21cc21112e22c485"
                      )

print(phone_number.sid)
