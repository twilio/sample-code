<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$address = $twilio->addresses
                  ->create("Customer 123", // customerName
                           "1 Hasselhoff Lane", // street
                           "Berlin", // city
                           "Berlin", // region
                           "10875", // postalCode
                           "DE", // isoCountry
                           array("friendlyName" => "Billing - Customer 123")
                  );

print($address->sid);