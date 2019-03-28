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

$verification_check = $twilio->verify->v2->services("VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                         ->verificationChecks
                                         ->create("1234", // code
                                                  array(
                                                      "to" => "+14159373912",
                                                      "amount" => "€39.99",
                                                      "payee" => "Acme Inc."
                                                  )
                                         );

print($verification_check->sid);