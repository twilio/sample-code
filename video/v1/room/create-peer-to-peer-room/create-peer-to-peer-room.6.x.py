# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

room = client.video.rooms.create(
                              enable_turn=True,
                              status_callback='http://example.org',
                              type='peer-to-peer',
                              unique_name='DailyStandup'
                          )

print(room.sid)
