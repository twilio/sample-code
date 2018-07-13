<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$workflow = $twilio->taskrouter->v1->workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->workflows
                                   ->create("Sales, Marketing, Support Workflow", // friendlyName
                                            array(
                                                "task_routing" => array(
                                                    "filters" => array(
                                                        array(
                                                            "expression" => "type=='sales'",
                                                            "targets" => array(
                                                                array(
                                                                    "queue" => "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                                )
                                                            )
                                                        ),
                                                        array(
                                                            "expression" => "type=='marketing'",
                                                            "targets" => array(
                                                                array(
                                                                    "queue" => "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                                )
                                                            )
                                                        ),
                                                        array(
                                                            "expression" => "type=='support'",
                                                            "targets" => array(
                                                                array(
                                                                    "queue" => "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    "default_filter" => array(
                                                        "queue" => "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                    )
                                                )
                                            ), // configuration
                                            array(
                                                "assignmentCallbackUrl" => "http://example.com",
                                                "fallbackAssignmentCallbackUrl" => "http://example2.com",
                                                "taskReservationTimeout" => 30
                                            )
                                   );

print($workflow->sid);