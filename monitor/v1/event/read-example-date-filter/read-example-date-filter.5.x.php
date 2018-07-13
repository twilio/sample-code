<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$events = $twilio->monitor->v1->events
                              ->read(array(
                                         "endDate" => new \DateTime('2015-4-1'),
                                         "startDate" => new \DateTime('2015-3-1')
                                     )
                              );

foreach ($events as $record) {
    print($record->sid);
}