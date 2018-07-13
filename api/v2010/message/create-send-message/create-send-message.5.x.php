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
                  ->create("+15558675310", // to
                           array(
                               "body" => "This is the ship that made the Kessel Run in fourteen parsecs?",
                               "from" => "+15017122661",
                               "mediaUrl" => "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg"
                           )
                  );

print($message->sid);