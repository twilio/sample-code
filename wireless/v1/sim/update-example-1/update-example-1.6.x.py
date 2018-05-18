# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sim = client.wireless.sims('DEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA') \
    .update(
         callback_method='POST',
         callback_url='https://sim-manager.mycompany.com/sim-update-callback/AliceSmithSmartMeter',
         status='active'
     )

print(sim.unique_name)
