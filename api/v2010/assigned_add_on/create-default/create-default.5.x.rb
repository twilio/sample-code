# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

assigned_add_on = @client
  .incoming_phone_numbers('PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .assigned_add_ons
  .create(installed_add_on_sid: 'XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

puts assigned_add_on.sid
