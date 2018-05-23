# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

binding = client.notify.services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                       .bindings \
                       .create(
<<<<<<< Updated upstream
                            endpoint="XXXXXXXXXXXXXXX",
                            tag="preferred device",
                            address="fcm_device_token",
                            binding_type="fcm",
                            identity="00000001"
=======
                            endpoint='XXXXXXXXXXXXXXX',
                            tag='preferred device',
                            identity='00000001',
                            binding_type='fcm',
                            address='fcm_device_token'
>>>>>>> Stashed changes
                        )

print(binding.sid)
