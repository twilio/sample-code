# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

workers_real_time_statistics = @client.taskrouter
  .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .workers('WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .real_time_statistics
  .fetch

puts workers_real_time_statistics.activity_statistics
