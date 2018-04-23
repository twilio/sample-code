# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

task_queue = @client.taskrouter
                    .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .task_queues('WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .fetch

puts task_queue.assignment_activity_name
