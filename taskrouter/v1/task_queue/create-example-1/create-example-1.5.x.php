<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$task_queue = $twilio->taskrouter->v1->workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                     ->taskQueues
                                     ->create("English", // friendlyName
                                              "WAea296a56ebce4bfbff0e99abadf16934", // reservationActivitySid
                                              "WA21d51f4c72583766988f9860de3e130a", // assignmentActivitySid
                                              array(
                                                  "targetWorkers" => "languages HAS \"english\""
                                              )
                                     );

print($task_queue->sid);