# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

call = client.calls.create(
                        method='GET',
                        status_callback='https://www.myapp.com/events',
                        status_callback_method='POST',
                        url='http://demo.twilio.com/docs/voice.xml',
                        to='+14155551212',
                        from_='+18668675310'
                    )

print(call.sid)
