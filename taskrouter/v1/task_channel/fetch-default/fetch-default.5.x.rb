# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

task_channel = @client.taskrouter
                      .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .task_channels('TCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .fetch

puts task_channel.friendly_name
