# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

rate_plan = @client.wireless
                   .rate_plans
                   .create(
                      friendly_name: 'California SmartMeter Plan',
                      messaging_enabled: true,
                      unique_name: 'SmartMeterCA'
                    )

puts rate_plan.sid
