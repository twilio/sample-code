<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$bulk_country_update = $twilio->voice->v1->dialingPermissions
                                         ->bulkCountryUpdates
                                         ->create("[{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"CU\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"LV\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"SO\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"LT\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"GN\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"GM\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"MV\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"EE\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"ZW\"},{ \"high_risk_special_numbers_enabled\": false, \"low_risk_numbers_enabled\": true, \"high_risk_tollfraud_numbers_enabled\": false, \"iso_code\": \"TN\"}]" // updateRequest
                                         );

print($bulk_country_update->updateCount);