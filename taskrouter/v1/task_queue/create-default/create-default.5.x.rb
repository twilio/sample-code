# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

task_queue = @client.taskrouter
  .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .task_queues
  .create(
     friendly_name: 'friendly_name',
     reservation_activity_sid: 'WAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     assignment_activity_sid: 'WAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
   )

puts task_queue.sid
