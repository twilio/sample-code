<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$workflow = $twilio->taskrouter->v1->workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->workflows
                                   ->create("Sales, Marketing, Support Workflow",
                                            "{\"task_routing\": {\"filters\": [{\"expression\": \"type=='sales'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}, {\"expression\": \"type=='marketing'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}, {\"expression\": \"type=='support'\", \"targets\": [{\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}]}], \"default_filter\": {\"queue\": \"WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"}}}",
                                            array(
                                                'assignmentCallbackUrl' => "http://example.com",
                                                'fallbackAssignmentCallbackUrl' => "http://example2.com",
                                                'taskReservationTimeout' => 30
                                            )
                                   );

print($workflow->sid);