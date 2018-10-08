<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$intent_actions = $twilio->preview->understand->assistants("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                              ->intents("tell-a-joke")
                                              ->intentActions()
                                              ->update(array(
                                                           "actions" => array(
                                                               "say" => "I was going to look for my missing watch, but I could never find the time."
                                                           )
                                                       )
                                              );

print($intent_actions->assistantSid);