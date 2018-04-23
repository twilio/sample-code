# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

workflow_cumulative_statistics = @client.taskrouter
  .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .workflows('WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .cumulative_statistics
  .fetch

puts workflow_cumulative_statistics.avg_task_acceptance_time
