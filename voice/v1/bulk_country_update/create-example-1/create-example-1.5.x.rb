# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

bulk_country_update = @client.voice
  .voice_permissions
  .bulk_country_updates
  .create(
     update_request: '{[{ "iso_code": "GB", "low_risk_numbers": "Enabled", "high_risk_special_numbers":"Enabled", "high_risk_irsf_numbers": "Enabled" }]}'
   )

puts bulk_country_update.update_count
