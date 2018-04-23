# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

service = @client.chat.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .update(
     notifications_added_to_channel_enabled: true,
     notifications_added_to_channel_sound: 'default',
     notifications_added_to_channel_template: 'A New message in ${CHANNEL} from ${USER}: ${MESSAGE}'
   )

puts service.friendly_name
