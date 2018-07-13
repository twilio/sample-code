<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$authorized_connect_app = $twilio->authorizedConnectApps("CN47260e643654388faabe8aaa18ea6756")
                                 ->fetch();

print($authorized_connect_app->connectAppCompanyName);