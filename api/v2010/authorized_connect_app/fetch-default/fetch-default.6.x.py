# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

authorized_connect_app = client \
    .authorized_connect_apps('CNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .fetch()

print(authorized_connect_app.connect_app_company_name)
