# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

bulk_country_update = client.voice \
    .voice_permissions \
    .bulk_country_updates \
    .create(
         update_request="[{'iso_code': 'US', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'DE', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'FR', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'GB', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'IN', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'IL', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'JP', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}, {'iso_code': 'BR', 'low_risk_numbers_enabled': 'true', 'high_risk_special_numbers_enabled': 'false', 'high_risk_tollfraud_numbers_enabled': 'false'}]"
     )

print(bulk_country_update.update_count)
