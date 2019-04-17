<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid at twilio.com/console
// Provision API Keys at twilio.com/console/runtime/api-keys
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$apiKey  = "SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$apiSecret  = "your_api_secret";
$twilio = new Client($apiKey, $apiSecret, $sid);

$message = $twilio->messages
                  ->create("+15558675310", // to
                           array(
                               "body" => "Never gonna give you up.",
                               "from" => "+15017122661"
                           )
                  );

print($message->sid);