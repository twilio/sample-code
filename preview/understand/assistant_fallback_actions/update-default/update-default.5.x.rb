# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

assistant_fallback_actions = @client.preview
  .understand
  .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .assistant_fallback_actions
  .update(fallback_actions: {})

puts assistant_fallback_actions.assistant_sid
