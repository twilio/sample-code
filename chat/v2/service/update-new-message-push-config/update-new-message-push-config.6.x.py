# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

service = client.chat.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .update(
         notifications_added_to_channel_enabled=True,
         notifications_added_to_channel_sound='default',
         notifications_added_to_channel_template='A New message in ${CHANNEL} from ${USER}: ${MESSAGE}'
     )

print(service.friendly_name)
