# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

dependent_phone_numbers = @client
  .addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .dependent_phone_numbers
  .list

dependent_phone_numbers.each do |record|
  puts record.sid
end
