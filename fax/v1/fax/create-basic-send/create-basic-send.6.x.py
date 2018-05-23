# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

fax = client.fax.faxes \
    .create(
         from_='+15017122661',
         to='+15558675310',
         media_url='https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf'
     )

print(fax.sid)
