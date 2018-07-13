<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$outgoing_caller_id = $twilio->outgoingCallerIds("PNe536d32a3c49700934481addd5ce1659")
                             ->update(array("friendlyName" => "My Second Line")
                             );

print($outgoing_caller_id->friendlyName);