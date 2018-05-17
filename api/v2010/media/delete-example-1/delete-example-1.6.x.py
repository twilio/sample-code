# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

client.messages('MM800f449d0399ed014aae2bcc0cc2f2ec') \
      .media('ME557ce644e5ab84fa21cc21112e22c485') \
      .delete()
