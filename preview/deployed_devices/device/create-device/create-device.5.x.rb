# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

device = @client.preview.deployed_devices
                        .fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .devices
                        .create(friendly_name: 'My Device #1')

puts device.sid
