# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

phone_number = client.trunking \
                     .trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .phone_numbers \
                     .create(
                          phone_number_sid='PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                      )

print(phone_number.sid)
