# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

conference = @client.conferences('CFbbe46ff1274e283f7e3ac1df0072ab39')
                    .update(announce_url: 'http://www.myapp.com/announce')

puts conference.friendly_name
