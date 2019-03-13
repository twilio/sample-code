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

$auth_calls_credential_list_mapping = $twilio->sip
                                             ->domains("SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                             ->auth
                                             ->calls
                                             ->credentialListMappings("CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                             ->fetch();

print($auth_calls_credential_list_mapping->friendlyName);