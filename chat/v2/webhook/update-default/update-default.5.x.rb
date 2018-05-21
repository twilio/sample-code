# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

webhook = @client.chat.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .update(configuration_url: 'configuration_url')

puts webhook.sid
