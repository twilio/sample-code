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

$task = $twilio->autopilot->v1->assistants("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                              ->tasks
                              ->create("tell-a-joke", // uniqueName
                                       array(
                                           "friendlyName" => "tell-a-joke",
                                           "actions" => array(
                                               "actions" => array(
                                                   array(
                                                       "say" => array(
                                                           "speech" => "I was going to look for my missing watch, but I could never find the time."
                                                       )
                                                   )
                                               )
                                           )
                                       )
                              );

print($task->sid);