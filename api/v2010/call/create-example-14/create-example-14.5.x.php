<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$call = $twilio->calls
               ->create("+14155551212", // to
                        "+18668675310", // from
                        array(
                            "method" => "GET",
                            "statusCallback" => "https://www.myapp.com/events",
                            "statusCallbackMethod" => "POST",
                            "url" => "http://demo.twilio.com/docs/voice.xml"
                        )
               );

print($call->sid);