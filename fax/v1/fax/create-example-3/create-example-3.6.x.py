# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

fax = client.fax.faxes \
    .create(
         from_='Jack',
         to='sip:kate@example.com?hatchkey=4815162342;transport=TCP',
         media_url='https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf'
     )

print(fax.sid)
