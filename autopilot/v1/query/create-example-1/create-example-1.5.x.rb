# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

query = @client.autopilot
               .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
               .queries
               .create(language: 'en-US', query: 'my new query')

puts query.sid
