<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$sync_list_item = $twilio->sync->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->syncLists("MyCollection")
                                   ->syncListItems
                                   ->create(array(
                                                "number" => "001",
                                                "name" => "Bulbasaur",
                                                "attack" => "49"
                                            ),
                                            array("ttl" => 864000)
                                   );

print($sync_list_item->index);