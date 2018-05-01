# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         body='McAvoy or Stewart? These timelines can get so confusing.',
         from_='+15017122661',
         status_callback='http://requestb.in/1234abcd',
         to='+15558675310'
     )

print(message.sid)
