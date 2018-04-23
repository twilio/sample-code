# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

outgoing_caller_id = @client
  .outgoing_caller_ids('PNe536d32a3c49700934481addd5ce1659')
  .update(friendly_name: 'My Second Line')

puts outgoing_caller_id.friendly_name
