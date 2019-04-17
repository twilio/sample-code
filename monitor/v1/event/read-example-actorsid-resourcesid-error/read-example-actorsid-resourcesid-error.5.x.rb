# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

events = @client.monitor.events
                        .list(
                           actor_sid: 'USd0afd67cddff4ec7cb0022771a203cb1',
                           resource_sid: 'PN4aa51b930717ea83c91971b86d99018f'
                         )

events.each do |record|
  puts record.sid
end
