# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

engagement = @client.studio
                    .flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .engagements
                    .create(to: '+15558675310', from: '+15017122661')

puts engagement.sid
