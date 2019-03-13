# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

incoming_phone_number = @client.incoming_phone_numbers
  .create(
     friendly_name: 'My Company Line',
     phone_number: '+15105647903',
     voice_method: 'GET',
     voice_url: 'http://demo.twilio.com/docs/voice.xml'
   )

puts incoming_phone_number.sid
