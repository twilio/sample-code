# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

short_codes = @client.messaging
                     .services('MG2172dd2db502e20dd981ef0d67850e1a')
                     .short_codes
                     .list(limit: 20)

short_codes.each do |record|
  puts record.sid
end
