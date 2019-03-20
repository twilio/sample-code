# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
subaccount_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
client = Client(account_sid, auth_token, subaccount_sid)

call = client.calls \
    .create(
         url='http://twimlets.com/message?Message%5B0%5D=Hello%20from%20your%20subaccount',
         to='+16518675310',
         from_='+14158141829'
     )

print(call.sid)
