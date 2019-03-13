# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

service = @client.notify.services
                 .create(
                    apn_credential_sid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                    fcm_credential_sid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                    friendly_name: 'My Awesome Service'
                  )

puts service.sid
