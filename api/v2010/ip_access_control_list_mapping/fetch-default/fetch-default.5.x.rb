# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

ip_access_control_list_mapping = @client.sip
  .domains('SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .ip_access_control_list_mappings('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .fetch

puts ip_access_control_list_mapping.account_sid
