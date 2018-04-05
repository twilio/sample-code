# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

binding = client.notify.services("ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") \
                       .bindings \
                       .create(
                            address="fcm_device_token",
                            binding_type="fcm",
                            identity="00000001",
                            endpoint="XXXXXXXXXXXXXXX",
                            tag="preferred device"
                        )

print(binding.sid)
