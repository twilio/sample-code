# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

ip_access_control_list = @client.trunking
  .trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .ip_access_control_lists
  .create(ip_access_control_list_sid: 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

puts ip_access_control_list.sid
