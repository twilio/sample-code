<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$sync_map_item = $twilio->sync->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                  ->syncMaps("MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                  ->syncMapItems
                                  ->create("steph_curry",
                                           array(
                                               "name" => "Stephen Curry",
                                               "level" => "30",
                                               "username" => "spicy_curry"
                                           ),
                                           array("ttl" => 864000)
                                  );

print($sync_map_item->key);