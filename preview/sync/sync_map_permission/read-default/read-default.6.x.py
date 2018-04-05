# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sync_map_permissions = client.preview.sync \
                             .services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                             .sync_maps("MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                             .sync_map_permissions \
                             .list()

for record in sync_map_permissions:
    print(record.account_sid)
