# Download the helper library from https://www.twilio.com/docs/python/install
from datetime import date
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

feedback_summary = client.calls \
                         .feedback_summaries \
                         .create(
                              start_date=date(2008, 1, 2),
                              end_date=date(2008, 1, 2)
                          )

print(feedback_summary.sid)
