# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

document_permission = @client.sync
                             .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .documents('MyFirstDocument')
                             .document_permissions('bob')
<<<<<<< Updated upstream
                             .update(manage: true, read: true, write: true)
=======
                             .update(read: true, write: true, manage: false)
>>>>>>> Stashed changes

puts document_permission.service_sid
