<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$document = $twilio->sync->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                             ->documents("MyFirstDocument")
                             ->update(array(
                                          "data" => array(
                                              "date_updated" => "2018-02-14 12:24:33.889341",
                                              "movie_title" => "On The Line",
                                              "show_times" => None,
                                              "starring" => array(
                                                  "Lance Bass",
                                                  "Joey Fatone"
                                              ),
                                              "genre" => "Romance"
                                          )
                                      )
                             );

print($document->uniqueName);