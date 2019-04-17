# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

auth_calls_ip_access_control_list_mapping = @client.sip
  .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .auth
  .calls
  .ip_access_control_list_mappings('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .fetch

puts auth_calls_ip_access_control_list_mapping.friendly_name
