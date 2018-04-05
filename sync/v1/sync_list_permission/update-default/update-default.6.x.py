# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sync_list_permission = client.sync \
    .services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .sync_lists("ESaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .sync_list_permissions("identity") \
    .update(read=True, write=True, manage=True)

print(sync_list_permission.account_sid)
