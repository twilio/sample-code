<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$messageInteractions = $twilio->preview->proxy->services("KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                              ->sessions("KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                              ->participants("KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                              ->messageInteractions
                                              ->read();

foreach ($messageInteractions as $record) {
    print($record->sid);
}