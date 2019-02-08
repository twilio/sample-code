# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

number = client.pricing.voice \
                       .numbers('+15017122661') \
                       .fetch(origination_number='+15108675310')

print(number.outbound_call_prices)
