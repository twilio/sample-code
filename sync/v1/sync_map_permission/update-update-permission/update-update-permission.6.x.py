# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sync_map_permission = client.sync \
                            .services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                            .sync_maps("MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                            .sync_map_permissions("identity") \
                            .update(manage=True, read=False, write=False)

print(sync_map_permission.account_sid)
