<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$stream_message = $twilio->sync->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->syncStreams("TOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->streamMessages
                                   ->create(array(
                                                "id" => "bob",
                                                "x" => "256",
                                                "y" => "42"
                                            )
                                   );

print($stream_message->sid);