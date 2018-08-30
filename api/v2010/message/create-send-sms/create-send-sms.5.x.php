<?php
require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$message = $twilio->messages
                  ->create("+15558675310", // to
                           array(
                               "body" => "This is the ship that made the Kessel Run in fourteen parsecs?",
                               "from" => "+15017122661"
                           )
                  );

print($message->sid);
