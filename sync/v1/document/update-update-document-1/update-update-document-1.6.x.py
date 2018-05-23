# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

document = client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                      .documents('MyFirstDocument') \
                      .update(data={
                           'date_updated': '2018-02-14 12:24:33.889341',
                           'movie_title': 'On The Line',
                           'show_times': None,
                           'starring': [
                               'Lance Bass',
                               'Joey Fatone'
                           ],
                           'genre': 'Romance'
                       })

print(document.unique_name)
