# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

message = @client.messages
  .create(
     body: 'Phantom Menace was clearly the best of the prequel trilogy.',
     messaging_service_sid: 'MG9752274e9e519418a7406176694466fa',
     to: '+441632960675'
   )

puts message.sid
