# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

participant = client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                          .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                          .participants \
                          .create(
                               friendly_name='Alice',
                               identifier='+15558675310'
                           )

print(participant.sid)
