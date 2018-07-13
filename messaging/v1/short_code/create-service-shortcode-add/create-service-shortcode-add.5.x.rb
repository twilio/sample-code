# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

short_code = @client.messaging
                    .services('MG2172dd2db502e20dd981ef0d67850e1a')
                    .short_codes
                    .create(
                       short_code_sid: 'SC3f94c94562ac88dccf16f8859a1a8b25'
                     )

puts short_code.sid
