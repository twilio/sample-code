# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = '"ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

call = client.calls.create(
                        record=False,
<<<<<<< Updated upstream
                        url="http://demo.twilio.com/docs/voice.xml",
                        from_="+15017122661",
                        to="+14155551212"
=======
                        url='http://demo.twilio.com/docs/voice.xml',
                        to='+14155551212',
                        from_='+15017122661'
>>>>>>> Stashed changes
                    )

print(call.sid)
