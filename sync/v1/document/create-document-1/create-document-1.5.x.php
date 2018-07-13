<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$document = $twilio->sync->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                             ->documents
                             ->create(array(
                                          "data" => array(
                                              "date_updated" => "2018-02-14 12:24:31.843662",
                                              "movie_title" => "On The Line",
                                              "show_times" => array(
                                                  "12:30:00Z",
                                                  "14:45:00Z",
                                                  "15:30:00Z",
                                                  "17:45:00Z"
                                              ),
                                              "starring" => array(
                                                  "Lance Bass",
                                                  "Joey Fatone"
                                              ),
                                              "genre" => "Romance"
                                          ),
                                          "ttl" => 1814400,
                                          "uniqueName" => "MyFirstDocument"
                                      )
                             );

print($document->sid);