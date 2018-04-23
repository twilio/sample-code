# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

recordings = @client.recordings.list(
                                  date_created_before: Date.new(2016, 10, 15),
                                  date_created_after: Date.new(2016, 10, 12)
                                )

recordings.each do |record|
  puts record.sid
end
