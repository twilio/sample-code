# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

address = @client.addresses('AD2a0747eba6abf96b7e3c3ff0b4530f6e')
                 .update(
                    customer_name: 'Customer 456',
                    street: '2 Hasselhoff Lane'
                  )

puts address.customer_name
