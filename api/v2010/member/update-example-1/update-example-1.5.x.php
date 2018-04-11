<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$member = $twilio->queues("QU5ef8732a3c49700934481addd5ce1659")
                 ->members("Front")
                 ->update("POST", "http://demo.twilio.com/docs/voice.xml");

print($member.callSid);