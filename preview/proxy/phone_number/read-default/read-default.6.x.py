# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

phone_numbers = client.preview \
                      .proxy \
                      .services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .phone_numbers \
                      .list()

for record in phone_numbers:
    print(record.sid)
