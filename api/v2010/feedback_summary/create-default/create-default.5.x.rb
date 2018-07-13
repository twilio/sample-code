# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

feedback_summary = @client.calls
                          .feedback_summaries
                          .create(
                             start_date: Date.new(2008, 1, 2),
                             end_date: Date.new(2008, 1, 2)
                           )

puts feedback_summary.sid
