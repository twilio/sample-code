# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

field_values = client.autopilot \
                     .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .field_types('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .field_values \
                     .list()

for record in field_values:
    print(record.sid)
