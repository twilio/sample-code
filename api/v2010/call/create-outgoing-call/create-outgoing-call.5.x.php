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
               ->create("+1562300000", // to
                        "+18180000000", // from
                        array(
                            "machineDetection" => "Enable",
                            "url" => "https://handler.twilio.com/twiml/EH8ccdbd7f0b8fe34357da8ce87ebe5a16"
                        )
               );

print($call->sid);