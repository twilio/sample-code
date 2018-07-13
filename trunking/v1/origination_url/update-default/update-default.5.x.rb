# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

origination_url = @client.trunking
  .trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .origination_urls('OUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .update(weight: 1)

puts origination_url.friendly_name
