# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

recording_settings = @client.video
  .recording_settings
  .create(
     aws_s3_url: 'AwsS3Url=https://my-bucket.s3.amazonaws.com/recordings',
     aws_storage_enabled: true,
     aws_credentials_sid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     encryption_enabled: true,
     encryption_key_sid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     friendly_name: 'Upload encrypted'
   )

puts recording_settings.friendly_name
