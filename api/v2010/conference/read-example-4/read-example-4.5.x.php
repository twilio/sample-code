<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$conferences = $twilio->conferences
                      ->read(array(
                                 "dateCreatedAfter" => new \DateTime('2009-07-06'),
                                 "status" => "in-progress"
                             ),
                             20
                      );

foreach ($conferences as $record) {
    print($record->sid);
}