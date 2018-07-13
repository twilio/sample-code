# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sync_map_item = client.sync \
                      .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .sync_maps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .sync_map_items \
                      .create(key='key', data={})

print(sync_map_item.key)
