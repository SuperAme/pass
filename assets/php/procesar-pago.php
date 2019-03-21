<?php
require __DIR__  . '/vendor/autoload.php';
//MercadoPago\SDK::setAccessToken("TEST-1634183705715282-060518-18f951a68d30eb996dc78b551a670cc9-316042713"); //--Acces token de sandbox
MercadoPago\SDK::setAccessToken("APP_USR-1634183705715282-060518-94ae94a17162d346ba93974a4f9ebb1a-316042713"); //--Acces token de producción

$productPrice = floatval(preg_replace('/[^\d\.]/', '', $_POST["productPrice"]));
$productDesc = $_POST["productDesc"];
$productCant = intval($_POST["productCant"]);
$paymentMethodId = $_POST["paymentMethodId"];
if ($paymentMethodId != "oxxo") { //--Si el método de pago es distinto a "oxxo" extrae la variable del token de la tarjeta
    $token = $_POST["token"];
}
$payerEmail = $_POST["email"];
//echo $productPrice." ".$token." ".$productDesc." ".$productCant." ".$paymentMethodId." ".$payerEmail;

//...
$payment = new MercadoPago\Payment();

$payment->transaction_amount = $productPrice;
if ($paymentMethodId != "oxxo") { //--Si el método de pago es distinto a "oxxo" coloca la variable del token de la tarjeta
    $payment->token = $token;
}
$payment->description = $productDesc;
$payment->installments = $productCant;
$payment->payment_method_id = $paymentMethodId;
$payment->payer = array(
    "email" => $payerEmail
);

// Save and posting the payment
$payment->save();

//...
// Print the payment status
//echo $payment->status;
if ($paymentMethodId != "oxxo") {
    echo $payment->status_detail;
} else {
    echo $payment->transaction_details->external_resource_url;
}

//echo json_encode($payment);
//header("Location: ../../tienda/estatus-pago.html?estatus=$status_detail");
?>