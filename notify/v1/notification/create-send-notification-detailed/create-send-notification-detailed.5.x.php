<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$notification = $twilio->notify->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->notifications
                                   ->create(array(
                                                "apn" => array(
                                                    "aps" => array(
                                                        "alert" => array(
                                                            "title" => "Short title for Watch."
                                                        )
                                                    )
                                                ),
                                                "body" => "This is the body for all Bindings",
                                                "data" => array(
                                                    "custom_key1" => "custom value 1",
                                                    "custom_key2" => "custom value 2"
                                                ),
                                                "fcm" => array(
                                                    "notification" => array(
                                                        "title" => "New alert",
                                                        "body" => "Hello Bob!"
                                                    )
                                                ),
                                                "identity" => "00000001",
                                                "title" => "Generic loooooooong title for all Bindings"
                                            )
                                   );

print($notification->sid);