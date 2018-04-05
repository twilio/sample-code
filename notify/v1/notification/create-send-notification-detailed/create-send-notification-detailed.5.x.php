<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$notification = $twilio->notify->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->notifications
                                   ->create(array(
                                                'apn' => "{\"aps\":{\"alert\":{\"title\":\"Short title for Watch.\"}}}",
                                                'body' => "This is the body for all Bindings",
                                                'data' => "{\"custom_key1\":\"custom value 1\",\"custom_key2\":\"custom value 2\"}",
                                                'fcm' => "{\"notification\":{\"title\":\"New alert\",\"body\":\"Hello Bob!\"}}",
                                                'identity' => "00000001",
                                                'title' => "Generic loooooooong title for all Bindings"
                                            )
                                   );

print($notification.sid);