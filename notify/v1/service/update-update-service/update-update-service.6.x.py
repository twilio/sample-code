# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

service = client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                .update(
                     facebook_messenger_page_id='your_page_id',
                     friendly_name='Another Awesome Service',
                     messaging_service_sid='MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                 )

print(service.friendly_name)
