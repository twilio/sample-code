<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$member = $twilio->queues("QU5ef8732a3c49700934481addd5ce1659")
                 ->members("CA386025c9bf5d6052a1d1ea42b4d16662")
                 ->fetch();

print($member->callSid);