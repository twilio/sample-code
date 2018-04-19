# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

trigger = @client.usage.triggers
                       .create(
                          callback_url: 'https://example.com',
                          trigger_value: 'trigger_value',
                          usage_category: 'answering-machine-detection'
                        )

puts trigger.sid
