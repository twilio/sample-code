# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

certificate = @client.preview
                     .deployed_devices
                     .fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .certificates('CYXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .update(
                        device_sid: 'THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                        friendly_name: 'My New Certificate'
                      )

puts certificate.friendly_name
