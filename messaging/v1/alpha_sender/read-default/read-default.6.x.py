# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

alpha_senders = client.messaging \
                      .services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .alpha_senders \
                      .list()

for record in alpha_senders:
    print(record.sid)
