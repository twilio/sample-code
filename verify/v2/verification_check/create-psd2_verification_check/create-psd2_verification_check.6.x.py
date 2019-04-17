# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

verification_check = client.verify \
                           .services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                           .verification_checks \
                           .create(
                                to='+14159373912',
                                amount='€39.99',
                                payee='Acme Inc.',
                                code='1234'
                            )

print(verification_check.sid)
