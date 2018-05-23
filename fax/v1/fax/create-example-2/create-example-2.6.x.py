# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

fax = client.fax.faxes \
    .create(
         from_='Jack',
         sip_auth_password='secret',
         sip_auth_username='jack',
         to='sip:kate@example.com',
         media_url='https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf'
     )

print(fax.sid)
