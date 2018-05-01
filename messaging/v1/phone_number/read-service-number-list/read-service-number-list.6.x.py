# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

phone_numbers = client.messaging \
                      .services('MG2172dd2db502e20dd981ef0d67850e1a') \
                      .phone_numbers \
                      .list()

for record in phone_numbers:
    print(record.sid)
