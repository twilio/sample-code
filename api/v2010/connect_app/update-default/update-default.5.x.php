<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$connect_app = $twilio->connectApps("CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                      ->update(array(
                                   'authorizeRedirectUrl' => "https://example.com"
                               )
                      );

print($connect_app.sid);