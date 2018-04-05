# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

published_track = client.video.rooms("RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .participants("PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .published_tracks("MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
    .fetch()

print(published_track.sid)
