<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$application = $twilio->applications("AP2a0747eba6abf96b7e3c3ff0b4530f6e")
                      ->update(array(
                                   "smsUrl" => "http://demo.twilio.com/docs/sms.xml",
                                   "voiceUrl" => "http://demo.twilio.com/docs/voice.xml"
                               )
                      );

print($application->friendlyName);