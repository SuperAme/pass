<?php

//require __DIR__  . '/vendor/autoload.php';
require_once ('MercadoPago/mercadopago.php');

//MercadoPago\SDK::setAccessToken("TEST-1634183705715282-060518-18f951a68d30eb996dc78b551a670cc9-316042713"); //--Acces token de sandbox
//MercadoPago\SDK::setAccessToken("APP_USR-1634183705715282-060518-94ae94a17162d346ba93974a4f9ebb1a-316042713"); //--Acces token de producción
/*
//$payment = new MercadoPago\Preapproval();
//$payment->get("3847679645");
$payment->status = "cancelled";
$payment->update();
print_r($payment);
*/
/*
$payment = MercadoPago\Preapproval::load("3847679645");
$payment->status = "cancelled";
$payment->update();
*/

//$mp = new MP('TEST-1634183705715282-060518-18f951a68d30eb996dc78b551a670cc9-316042713');
$mp = new MP('APP_USR-1634183705715282-060518-94ae94a17162d346ba93974a4f9ebb1a-316042713');
$result = $mp->cancel_payment("3847679645");
print_r ($result);

?>