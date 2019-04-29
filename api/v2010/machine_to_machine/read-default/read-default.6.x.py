# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

machine_to_machine = client.available_phone_numbers('US') \
                           .machine_to_machine \
                           .list(limit=20)

for record in machine_to_machine:
    print(record.friendly_name)
