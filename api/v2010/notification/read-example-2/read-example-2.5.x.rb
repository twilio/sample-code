# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

notifications = @client.notifications.list(
                                        log: 1,
                                        message_date: Date.new(2009, 7, 6),
                                        limit: 20
                                      )

notifications.each do |record|
  puts record.sid
end
