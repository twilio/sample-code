# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

call = @client.calls('CAe1644a7eed5088b159577c5802d8be38')
              .update(
                 method: 'POST',
                 url: 'http://demo.twilio.com/docs/voice.xml'
               )

puts call.to
