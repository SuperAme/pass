<?php
require __DIR__  . '/vendor/autoload.php';

MercadoPago\SDK::setAccessToken("TEST-1634183705715282-060518-18f951a68d30eb996dc78b551a670cc9-316042713");

$payment_methods = MercadoPago\SDK::get("/v1/payment_methods");

echo json_encode($payment_methods);

?>