# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

application = @client.applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .update(
                        sms_url: 'http://demo.twilio.com/docs/sms.xml',
                        voice_url: 'http://demo.twilio.com/docs/voice.xml'
                      )

puts application.account_sid
