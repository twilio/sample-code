# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

composition_settings = @client.video
  .composition_settings
  .create(
     aws_s3_url: 'AwsS3Url=https://my-bucket.s3.amazonaws.com/recordings',
     aws_storage_enabled: true,
     aws_credentials_sid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     encryption_enabled: true,
     encryption_key_sid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     friendly_name: 'Upload encrypted'
   )

puts composition_settings.friendly_name
