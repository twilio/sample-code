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
                                         ->create("[ { \"iso_code\": \"US\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"DE\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"FR\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"GB\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" } , { \"iso_code\": \"IN\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }, { \"iso_code\": \"IL\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" } , { \"iso_code\": \"JP\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" } , { \"iso_code\": \"BR\", \"low_risk_numbers_enabled\": \"true\", \"high_risk_special_numbers_enabled\":\"false\", \"high_risk_tollfraud_numbers_enabled\": \"false\" }]" // updateRequest
                                         );

print($bulk_country_update->updateCount);