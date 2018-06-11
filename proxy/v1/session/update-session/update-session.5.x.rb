# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

session = @client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .update(
                          date_expiry: Date.new(2018, 7, 31),
                          status: 'in-progress'
                        )

puts session.unique_name
