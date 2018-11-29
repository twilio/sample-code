<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$recording_settings = $twilio->video->v1->recordingSettings()
                                        ->create("Upload to external bucket", // friendlyName
                                                 array(
                                                     "awsS3Url" => "AwsS3Url=https://my-bucket.s3.amazonaws.com/recordings",
                                                     "awsStorageEnabled" => True,
                                                     "awsCredentialsSid" => "CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                 )
                                        );

print($recording_settings->friendlyName);