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
                                         "actorSid" => "USd0afd67cddff4ec7cb0022771a203cb1",
                                         "resourceSid" => "PN4aa51b930717ea83c91971b86d99018f"
                                     )
                              );

foreach ($events as $record) {
    print($record->sid);
}