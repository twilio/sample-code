# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

assistant = client.autopilot.assistants.create(
                                            friendly_name='Styled Assistant',
                                            unique_name='styled-assistant',
                                            style_sheet={
                                                'voice': {
                                                    'say_voice': 'Polly.Joanna'
                                                }
                                            }
                                        )

print(assistant.sid)
