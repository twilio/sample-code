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

$authorization_document = $twilio->preview->hostedNumbers->authorizationDocuments("PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                                         ->update(array(
                                                                      "hostedNumberOrderSids" => array("hosted_number_order_sids")
                                                                  )
                                                         );

print($authorization_document->sid);