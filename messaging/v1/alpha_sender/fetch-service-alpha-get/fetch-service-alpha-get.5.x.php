<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$alpha_sender = $twilio->messaging->v1->services("MG2172dd2db502e20dd981ef0d67850e1a")
                                      ->alphaSenders("AIc781610ec0b3400c9e0cab8e757da937")
                                      ->fetch();

print($alpha_sender->sid);