# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

application = @client.applications('AP2a0747eba6abf96b7e3c3ff0b4530f6e')
                     .update(
                        sms_url: 'http://demo.twilio.com/docs/sms.xml',
                        voice_url: 'http://demo.twilio.com/docs/voice.xml'
                      )

puts application.friendly_name
