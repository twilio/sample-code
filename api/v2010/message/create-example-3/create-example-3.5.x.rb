# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

message = @client.messages
                 .create(
                    body: "Let's grab lunch at Milliways tomorrow!",
                    from: '+14158141829',
                    media_url: 'http://www.example.com/cheeseburger.png',
                    to: '+15558675310'
                  )

puts message.sid
