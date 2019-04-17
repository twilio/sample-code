# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

short_code = @client.short_codes('SC6b20cb705c1e8f00210049b20b70fce3')
                    .update(sms_url: 'http://demo.twilio.com/docs/sms.xml')

puts short_code.friendly_name
