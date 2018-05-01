# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

connect_app = client.connect_apps('CNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .update(authorize_redirect_url='https://example.com')

print(connect_app.company_name)
