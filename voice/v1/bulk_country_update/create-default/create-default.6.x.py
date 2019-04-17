# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

bulk_country_update = client.voice \
                            .dialing_permissions \
                            .bulk_country_updates \
                            .create(update_request='update_request')

print(bulk_country_update.update_count)
