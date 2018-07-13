<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$address = $twilio->addresses("AD2a0747eba6abf96b7e3c3ff0b4530f6e")
                  ->update(array(
                               "customerName" => "Customer 456",
                               "street" => "2 Hasselhoff Lane"
                           )
                  );

print($address->customerName);