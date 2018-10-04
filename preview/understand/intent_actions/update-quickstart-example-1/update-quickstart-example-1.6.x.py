# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

intent_actions = client.preview \
    .understand \
    .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .intents('tell-a-joke') \
    .intent_actions() \
    .update(
         actions='{[{"say": "I was going to look for my missing watch, but I could never find the time."}]}'
     )

print(intent_actions.assistant_sid)
