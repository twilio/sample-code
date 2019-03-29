# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

highrisk_special_prefixes = @client.voice
                                   .dialing_permissions
                                   .countries('LV')
                                   .highrisk_special_prefixes
                                   .list

highrisk_special_prefixes.each do |record|
  puts record.prefix
end
