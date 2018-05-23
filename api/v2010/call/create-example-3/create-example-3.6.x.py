# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

call = client.calls.create(
                        method='GET',
                        send_digits='1234#',
                        url='http://demo.twilio.com/docs/voice.xml',
                        to='+14155551212',
                        from_='+18668675310'
                    )

print(call.sid)
