# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

rate_plan = client.wireless.rate_plans \
                           .create(
                                friendly_name='California SmartMeter Plan',
                                messaging_enabled=True,
                                unique_name='SmartMeterCA'
                            )

print(rate_plan.sid)
