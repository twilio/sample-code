<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$short_code = $twilio->shortCodes("SC6b20cb705c1e8f00210049b20b70fce3")
                     ->update(array(
                                  "smsUrl" => "http://demo.twilio.com/docs/sms.xml"
                              )
                     );

print($short_code->friendlyName);