# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

highrisk_special_prefixes = @client.voice
                                   .voice_permissions
                                   .countries('US')
                                   .highrisk_special_prefixes
                                   .list

highrisk_special_prefixes.each do |record|
  puts record.prefix
end
