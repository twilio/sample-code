# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

application = client.applications("APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                    .update(
                         sms_url="http://demo.twilio.com/docs/sms.xml",
                         voice_url="http://demo.twilio.com/docs/voice.xml"
                     )

print(application.sid)
