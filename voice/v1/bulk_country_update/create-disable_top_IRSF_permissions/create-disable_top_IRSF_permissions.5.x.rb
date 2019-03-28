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
     update_request: "[{'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'CU'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'LV'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'SO'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'LT'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'GN'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'GM'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'MV'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'EE'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'ZW'}, {'high_risk_special_numbers_enabled': False, 'low_risk_numbers_enabled': True, 'high_risk_tollfraud_numbers_enabled': False, 'iso_code': 'TN'}]"
   )

puts bulk_country_update.update_count
