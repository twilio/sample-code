<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$worker_channel = $twilio->taskrouter->v1->workspaces("WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                         ->workers("WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                         ->workerChannels("WCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                                         ->update(array('capacity' => 1));

print($worker_channel.accountSid);