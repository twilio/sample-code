# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

field_value = @client.preview.understand
                     .services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                     .field_types('UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                     .field_values('UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                     .fetch

puts field_value.sid
