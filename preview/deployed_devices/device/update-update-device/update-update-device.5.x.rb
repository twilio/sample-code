# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

device = @client.preview.deployed_devices
                        .fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .devices('THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .update(
                           friendly_name: 'My New Device',
                           identity: 'bob@twilio.com'
                         )

puts device.unique_name
