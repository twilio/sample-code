# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sync_map_item = @client.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .sync_maps('MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .sync_map_items('key')
  .update(
     data: JSON.parse('{"name": "Stephen Curry", "level": 31, "username": "spicy_curry"}')
   )

puts sync_map_item.key
