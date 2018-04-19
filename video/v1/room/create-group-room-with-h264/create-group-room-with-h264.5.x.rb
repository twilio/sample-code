# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

room = @client.video.rooms.create(
                             status_callback: 'http://example.org',
                             type: 'group',
                             unique_name: 'DailyStandupWithH264Codec',
                             video_codecs: 'H264'
                           )

puts room.sid
