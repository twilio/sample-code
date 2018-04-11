# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

task_queue = @client.taskrouter
                    .workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .task_queues('WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    .update(target_workers: 'languages HAS "english"')

puts task_queue.account_sid
