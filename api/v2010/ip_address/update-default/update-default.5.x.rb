# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

ip_address = @client.sip
  .ip_access_control_lists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .ip_addresses('IPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .update(ip_address: 'ip_address')

puts ip_address.friendly_name
