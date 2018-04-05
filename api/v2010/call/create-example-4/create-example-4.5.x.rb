# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

call = @client.calls.create(
                       from: '+18668675310',
                       to: '+14155551212',
                       method: 'GET',
                       status_callback: 'https://www.myapp.com/events',
                       status_callback_event: 'initiated',
                       status_callback_method: 'POST',
                       url: 'http://demo.twilio.com/docs/voice.xml'
                     )

puts call.sid
