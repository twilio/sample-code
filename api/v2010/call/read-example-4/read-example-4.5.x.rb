# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

calls = @client.calls.list(
                        start_time_before: Date.new(2009, 7, 6),
                        start_time_after: Date.new(2009, 7, 4),
                        status: 'in-progress'
                      )

calls.each do |record|
  puts record.sid
end
