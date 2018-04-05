# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sync_list_item = @client.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                             .sync_lists('ESaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                             .sync_list_items(1)
                             .fetch

puts sync_list_item.index
