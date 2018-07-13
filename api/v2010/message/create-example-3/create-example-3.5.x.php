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
                               "body" => "Let's grab lunch at Milliways tomorrow!",
                               "from" => "+14158141829",
                               "mediaUrl" => "http://www.example.com/cheeseburger.png"
                           )
                  );

print($message->sid);