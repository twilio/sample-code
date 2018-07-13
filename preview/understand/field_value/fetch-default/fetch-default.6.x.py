# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

field_value = client.preview \
                    .understand \
                    .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .field_types('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .field_values('UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .fetch()

print(field_value.date_created)
