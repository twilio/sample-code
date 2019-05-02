# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sync_map_item = @client.sync
                       .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .sync_maps('Players')
                       .sync_map_items('steph_curry')
                       .update(data: {
                            'name' => 'Stephen Curry',
                            'level' => 31,
                            'username' => 'spicy_curry'
                        })

puts sync_map_item.key
