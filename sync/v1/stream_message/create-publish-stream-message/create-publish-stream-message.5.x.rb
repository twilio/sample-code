# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

stream_message = @client.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        .sync_streams('TOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        .stream_messages
                        .create(
                           data: JSON.parse('{"id": "bob", "x": 256, "y": 42}')
                         )

puts stream_message.sid
