<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$defaults = $twilio->autopilot->v1->assistants("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                  ->defaults()
                                  ->update(array(
                                               "defaults" => array(
                                                   "defaults" => array(
                                                       "assistant_initiation" => "task://hello-world",
                                                       "fallback" => "task://hello-world"
                                                   )
                                               )
                                           )
                                  );

print($defaults->assistantSid);