<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$phone_number = $twilio->lookups->v1->phoneNumbers("+15108675310")
                                    ->fetch(array(
                                                "addOns" => "payfone_tcpa_compliance",
                                                "addOnsData" => array(
                                                    "payfone_tcpa_compliance.right_party_contacted_date" => "20160101"
                                                ),
                                                "type" => "carrier"
                                            )
                                    );

print($phone_number->callerName);