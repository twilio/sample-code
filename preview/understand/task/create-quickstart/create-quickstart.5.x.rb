# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

task = @client.preview.understand
  .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .tasks
  .create(friendly_name: 'tell a joke', actions: {
       'actions' => [
           {
               'say' => {
                   'speech' => 'I was going to look for my missing watch, but I could never find the time.'
               }
           },
       ]
   }, unique_name: 'tell-a-joke')

puts task.sid
