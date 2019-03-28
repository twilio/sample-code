# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

bulk_country_update = @client.voice
  .dialing_permissions
  .bulk_country_updates
  .create(
     update_request: "[{'iso_code': 'US', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}]"
   )

puts bulk_country_update.update_count
