<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$fax = $twilio->fax->v1->faxes
                       ->create("sip:kate@example.com",
                                "https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf",
                                array(
                                    'from' => "Jack",
                                    'sipAuthPassword' => "secret",
                                    'sipAuthUsername' => "jack"
                                )
                       );

print($fax.sid);