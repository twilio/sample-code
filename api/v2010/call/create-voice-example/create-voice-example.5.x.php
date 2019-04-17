<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid           = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$subaccountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token         = "your_auth_token";
$twilio        = new Client($sid, $token, $subaccountSid);

$call = $twilio->calls
               ->create("+16518675310", // to
                        "+14158141829", // from
                        array(
                            "url" => "http://twimlets.com/message?Message%5B0%5D=Hello%20from%20your%20subaccount"
                        )
               );

print($call->sid);