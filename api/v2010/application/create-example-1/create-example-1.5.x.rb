# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

application = @client.applications
                     .create(
                        voice_method: 'GET',
                        voice_url: 'http://demo.twilio.com/docs/voice.xml',
                        friendly_name: 'Phone Me'
                      )

puts application.sid
