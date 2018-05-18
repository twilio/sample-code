# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

origination_url = client.trunking \
                        .trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                        .origination_urls \
                        .create(
                             weight=1,
                             priority=1,
                             enabled=True,
                             friendly_name='friendly_name',
                             sip_url='https://example.com'
                         )

print(origination_url.sid)
