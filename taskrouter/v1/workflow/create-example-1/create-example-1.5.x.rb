# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

workflow = @client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .workflows
  .create(
     assignment_callback_url: 'http://example.com',
     fallback_assignment_callback_url: 'http://example2.com',
     task_reservation_timeout: 30,
     friendly_name: 'Sales, Marketing, Support Workflow',
     configuration: {
       'task_routing' => {
           'filters' => [
               {
                   'expression' => "type=='sales'",
                   'targets' => [
                       {
                           'queue' => 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                       },
                   ]
               },
               {
                   'expression' => "type=='marketing'",
                   'targets' => [
                       {
                           'queue' => 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                       },
                   ]
               },
               {
                   'expression' => "type=='support'",
                   'targets' => [
                       {
                           'queue' => 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                       },
                   ]
               },
           ],
           'default_filter' => {
               'queue' => 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
           }
       }
   }
   )

puts workflow.sid
