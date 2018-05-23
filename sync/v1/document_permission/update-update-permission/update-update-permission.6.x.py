# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

document_permission = client.sync \
<<<<<<< Updated upstream
                            .services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                            .documents("MyFirstDocument") \
                            .document_permissions("bob") \
                            .update(manage=True, read=False, write=False)
=======
                            .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                            .documents('MyFirstDocument') \
                            .document_permissions('bob') \
                            .update(read=False, write=False, manage=False)
>>>>>>> Stashed changes

print(document_permission.service_sid)
