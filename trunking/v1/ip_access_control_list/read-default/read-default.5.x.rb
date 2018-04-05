# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

ip_access_control_lists = @client.trunking
                                 .trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                 .ip_access_control_lists
                                 .list

ip_access_control_lists.each do |record|
  puts record.sid
end
