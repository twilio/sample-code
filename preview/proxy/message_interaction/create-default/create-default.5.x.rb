# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

message_interaction = @client.preview.proxy
  .services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .sessions('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .message_interactions
  .create(body: 'body')

puts message_interaction.sid
