# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sync_map_item = @client.sync
                       .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .sync_maps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .sync_map_items
                       .create(ttl: 864000, key: 'steph_curry', data: {
                            'name' => 'Stephen Curry',
                            'level' => 30,
                            'username' => 'spicy_curry'
                        })

puts sync_map_item.key
