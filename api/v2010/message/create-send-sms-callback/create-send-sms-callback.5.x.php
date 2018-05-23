<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$message = $twilio->messages
                  ->create("+15558675310",
                           array(
                               "body" => "McAvoy or Stewart? These timelines can get so confusing.",
                               "from" => "+15017122661",
                               "statusCallback" => "http://requestb.in/1234abcd"
                           )
                  );

print($message->sid);