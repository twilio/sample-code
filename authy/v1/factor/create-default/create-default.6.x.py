# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

factor = client.authy.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .entities('identity') \
                     .factors \
                     .create(
                          binding='binding',
                          factor_type='factor_type',
                          friendly_name='friendly_name'
                      )

print(factor.sid)
