# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

alerts = @client.monitor.alerts.list(
                                  end_date: Date.new(2015, 4, 30),
                                  log_level: 'warning',
                                  start_date: Date.new(2015, 4, 1)
                                )

alerts.each do |record|
  puts record.sid
end
