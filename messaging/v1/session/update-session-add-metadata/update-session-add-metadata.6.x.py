# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

session = client.messaging \
                .sessions('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                .update(attributes='{ product-under-discussion: "hair care" }')

print(session.friendly_name)
