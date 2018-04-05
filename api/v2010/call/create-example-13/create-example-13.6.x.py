# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

call = client.calls.create(
                        from_="+18668675310",
                        to="+14155551212",
                        method="GET",
                        send_digits="1234#",
                        url="http://demo.twilio.com/docs/voice.xml"
                    )

print(call.sid)
