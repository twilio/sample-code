# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

style_sheet = client.preview \
                    .understand \
                    .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                    .style_sheet() \
                    .update(style_sheet={
                         'voice': {
                             'say_voice': 'Polly.Joanna'
                         }
                     })

print(style_sheet.assistant_sid)
