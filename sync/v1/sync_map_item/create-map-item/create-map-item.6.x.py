# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sync_map_item = client.sync.services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .sync_maps("MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .sync_map_items \
    .create(
         data={"name": "Stephen Curry", "level": 30, "username": "spicy_curry"},
         key="steph_curry",
         ttl=864000
     )

print(sync_map_item.key)
