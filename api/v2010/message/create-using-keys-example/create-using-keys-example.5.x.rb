# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
api_key = 'SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
api_secret = 'your_api_secret'
@client = Twilio::REST::Client.new(api_key, api_secret, account_sid)

message = @client.messages.create(
                             body: 'Never gonna give you up.',
                             from: '+15017122661',
                             to: '+15558675310'
                           )

puts message.sid
