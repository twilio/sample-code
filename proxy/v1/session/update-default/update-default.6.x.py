# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import datetime
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

session = client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .update(date_expiry=datetime(2008, 1, 2, 0, 0))

print(session.unique_name)
