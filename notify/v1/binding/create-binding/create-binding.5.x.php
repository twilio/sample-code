<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$binding = $twilio->notify->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                              ->bindings
                              ->create("00000001", // identity
                                       "apn", // bindingType
                                       "device_token", // address
                                       array(
                                           "endpoint" => "endpoint_id",
                                           "tag" => "new user"
                                       )
                              );

print($binding->sid);