<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$publishedTracks = $twilio->video->v1->rooms("RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                     ->participants("PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                     ->publishedTracks
                                     ->read();

foreach ($publishedTracks as $record) {
    print($record->sid);
}