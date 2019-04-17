# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

bulk_country_update = client.voice \
    .dialing_permissions \
    .bulk_country_updates \
    .create(
         update_request='[{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "CU"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "LV"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "SO"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "LT"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "GN"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "GM"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "MV"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "EE"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "ZW"},{ "high_risk_special_numbers_enabled": false, "low_risk_numbers_enabled": true, "high_risk_tollfraud_numbers_enabled": false, "iso_code": "TN"}]'
     )

print(bulk_country_update.update_count)
