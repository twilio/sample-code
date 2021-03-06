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

$short_code = $twilio->messaging->v1->services("MG2172dd2db502e20dd981ef0d67850e1a")
                                    ->shortCodes
                                    ->create("SC3f94c94562ac88dccf16f8859a1a8b25" // shortCodeSid
                                    );

print($short_code->sid);