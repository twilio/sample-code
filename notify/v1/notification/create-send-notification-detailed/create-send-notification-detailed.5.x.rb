# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

notification = @client.notify.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  .notifications
  .create(
     apn: JSON.parse('{"aps":{"alert":{"title":"Short title for Watch."}}}'),
     body: 'This is the body for all Bindings',
     data: JSON.parse('{"custom_key1":"custom value 1","custom_key2":"custom value 2"}'),
     fcm: JSON.parse('{"notification":{"title":"New alert","body":"Hello Bob!"}}'),
     identity: '00000001',
     title: 'Generic loooooooong title for all Bindings'
   )

puts notification.sid
