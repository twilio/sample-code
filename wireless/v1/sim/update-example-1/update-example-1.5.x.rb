# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sim = @client.wireless.sims('DEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  .update(
     callback_method: 'POST',
     callback_url: 'https://sim-manager.mycompany.com/sim-update-callback/AliceSmithSmartMeter',
     status: 'active'
   )

puts sim.unique_name
