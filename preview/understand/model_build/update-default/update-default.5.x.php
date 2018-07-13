<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$model_build = $twilio->preview->understand->assistants("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                           ->modelBuilds("UGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                           ->update(array(
                                                        "uniqueName" => "uniqueName"
                                                    )
                                           );

print($model_build->uniqueName);