# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

message = @client.messages.create(
                             body: 'All in the game, yo',
<<<<<<< Updated upstream
                             from: '+15017122661',
=======
                             from: '+5571981265145',
>>>>>>> Stashed changes
                             to: '+5571981265131'
                           )

puts message.sid
