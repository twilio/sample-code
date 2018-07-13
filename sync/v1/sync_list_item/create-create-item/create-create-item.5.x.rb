# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sync_list_item = @client.sync
                        .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .sync_lists('MyCollection')
                        .sync_list_items
                        .create(ttl: 864000, data: {
                             'number' => '001',
                             'name' => 'Bulbasaur',
                             'attack' => 49
                         })

puts sync_list_item.index
