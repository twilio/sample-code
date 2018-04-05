# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

message = @client.messages
  .create(
     to: '+15558675310',
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     media_url: 'https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'
   )

puts message.sid
