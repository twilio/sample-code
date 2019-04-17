# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

messages = @client.messages.list(
                              date_sent: Date.new(2016, 8, 31),
                              from: '+15017122661',
                              to: '+15558675310'
                            )

messages.each do |record|
  puts record.sid
end
