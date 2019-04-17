<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$style_sheet = $twilio->autopilot->v1->assistants("UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                     ->styleSheet()
                                     ->update(array(
                                                  "styleSheet" => array(
                                                      "style_sheet" => array(
                                                          "voice" => array(
                                                              "say_voice" => "Polly.Joanna"
                                                          )
                                                      )
                                                  )
                                              )
                                     );

print($style_sheet->assistantSid);