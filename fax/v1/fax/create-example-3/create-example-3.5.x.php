<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$fax = $twilio->fax->v1->faxes
                       ->create("sip:kate@example.com?hatchkey=4815162342;transport=TCP", // to
                                "https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf", // mediaUrl
                                array("from" => "Jack")
                       );

print($fax->sid);