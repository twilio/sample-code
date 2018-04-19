# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

incoming_phone_numbers = @client.incoming_phone_numbers
                                .list(phone_number: '+14158675310')

incoming_phone_numbers.each do |record|
  puts record.sid
end
