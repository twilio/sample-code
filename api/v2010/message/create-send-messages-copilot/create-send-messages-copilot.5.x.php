<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$message = $twilio->messages
                  ->create("+441632960675", // to
                           array(
                               "body" => "Phantom Menace was clearly the best of the prequel trilogy.",
                               "messagingServiceSid" => "MG9752274e9e519418a7406176694466fa"
                           )
                  );

print($message->sid);