<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$recordings = $twilio->recordings
                     ->read(array(
                                "dateCreatedBefore" => new \DateTime('2016-10-15'),
                                "dateCreatedAfter" => new \DateTime('2016-10-12')
                            )
                     );

foreach ($recordings as $record) {
    print($record->sid);
}