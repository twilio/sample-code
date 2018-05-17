# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

credential_list = client.trunking \
    .trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .credentials_lists \
    .create(credential_list_sid='CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

print(credential_list.sid)
