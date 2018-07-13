# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

alpha_sender = @client.messaging
                      .services('MG2172dd2db502e20dd981ef0d67850e1a')
                      .alpha_senders('AIc781610ec0b3400c9e0cab8e757da937')
                      .fetch

puts alpha_sender.sid
