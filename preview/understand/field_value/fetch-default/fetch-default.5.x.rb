# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

field_value = @client.preview
                     .understand
                     .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .field_types('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .field_values('UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .fetch

puts field_value.date_created
