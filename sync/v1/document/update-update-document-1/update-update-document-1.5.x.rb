# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

document = @client.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .documents('ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .update(
     data: JSON.parse('{"date_updated": "2018-02-14 12:24:33.889341", "movie_title": "On The Line", "show_times": null, "starring": ["Lance Bass", "Joey Fatone"], "genre": "Romance"}')
   )

puts document.sid
