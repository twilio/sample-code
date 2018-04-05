# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

participant = client.proxy.services("KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                          .sessions("KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                          .participants \
                          .create(
                               identifier="+15558675310",
                               friendly_name="Alice"
                           )

print(participant.sid)
