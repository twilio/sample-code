# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

session = client.messaging \
                .sessions \
                .create(
                     messaging_service_sid='MG2172dd2db502e20dd981ef0d67850e1a'
                 )

print(session.sid)
