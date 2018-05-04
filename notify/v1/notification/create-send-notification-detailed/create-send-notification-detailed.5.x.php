<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$notification = $twilio->notify->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->notifications
                                   ->create(array(
                                                'body' => "This is the body for all Bindings",
                                                'title' => "Generic loooooooong title for all Bindings",
                                                'data' => array(
                                                    "custom_key1" => "custom value 1",
                                                    "custom_key2" => "custom value 2"
                                                ),
                                                'apn' => array(
                                                    "aps" => "{'alert': {'title': 'Short title for Watch.'}}"
                                                ),
                                                'fcm' => array(
                                                    "notification" => "{'title': 'New alert', 'body': 'Hello Bob!'}"
                                                ),
                                                'identity' => array('identity')
                                            )
                                   );

print($notification.sid);