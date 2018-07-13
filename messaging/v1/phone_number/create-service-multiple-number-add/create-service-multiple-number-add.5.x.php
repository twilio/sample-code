<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$phone_number = $twilio->messaging->v1->services("MG2172dd2db502e20dd981ef0d67850e1a")
                                      ->phoneNumbers
                                      ->create("PN2a0747eba6abf96b7e3c3ff0b4530f6e" // phoneNumberSid
                                      );

print($phone_number->sid);