# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

address = @client.addresses.create(
                              customer_name: 'Customer 500',
                              street: 'Elm Street',
                              city: 'Racoon',
                              region: 'Mordor',
                              postal_code: '150',
                              iso_country: 'AX'
                            )

puts address.sid
