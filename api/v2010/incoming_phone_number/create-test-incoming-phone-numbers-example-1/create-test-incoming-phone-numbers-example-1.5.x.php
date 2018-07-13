<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$incoming_phone_number = $twilio->incomingPhoneNumbers
                                ->create(array(
                                             "phoneNumber" => "+15005550006",
                                             "voiceUrl" => "http://demo.twilio.com/docs/voice.xml"
                                         )
                                );

print($incoming_phone_number->sid);