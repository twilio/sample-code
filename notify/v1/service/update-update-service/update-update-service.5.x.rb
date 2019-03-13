# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

service = @client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                 .update(
                    facebook_messenger_page_id: 'your_page_id',
                    friendly_name: 'Another Awesome Service',
                    messaging_service_sid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                  )

puts service.friendly_name
