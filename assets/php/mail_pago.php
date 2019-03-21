<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

$from_email = "tupedido@pass.com.mx";
$name = "PASS Consultores";

//$mail->SMTPDebug = 4;
$mail->CharSet="utf-8";
$mail->IsSMTP();
$mail->Host = "pass.com.mx";
$mail->SMTPAuth = true;
$mail->Username = 'tupedido@pass.com.mx';
$mail->Password = 'mKFBwypECosH';
//$mail->SMTPSecure = 'tls';
$mail->Port = 25;
//--Se añade la imagen de la firma al correo
$mail->AddEmbeddedImage("../img/firma_ecommerce.png", "firma_ecommerce");

//--Variables para los correos
$to_email = $_POST["email"];
$product = $_POST["product"];
$price = $_POST["price"];
$clie_nom = $_POST["nombre"];
$clie_tel = $_POST["tel"];
$clie_email = $_POST["email"];
$bodyText = "";
$altBody = "";
$tipoPago = "";
$ticket_link = "";
$mail2 = true;
$mail3 = false;

//--Asunto del correo
$subject = "Compra de $product";

//--Si el pago no se completo
if (isset($_POST["pay_incomplete"])) {
    $mail2 = false; //--Para evitar enviar el correo a la cuenta de PASS
    $mail3 = true;
    $bodyText = 
        "<p style='font-size:17px; font-family:Verdana, Geneva, sans-serif;'>Hola $clie_nom<br><br>
        Si deseas más información acerca del producto: $product.<br>
        Comunícate al (55) 5678-5136 o mándanos un correo electrónico a info@pass.com.mx<br><br>
        Estamos para ayudarte.<br><br>
        Atentamente:<br>
        El equipo de PASS Consultores<br><br></p>
        <img src=\"cid:firma_ecommerce\" />";
    $altBody = 
        "Hola $clie_nom\n\n
        Si deseas más información acerca del producto: $product.\n
        Comunícate al (55) 5678-5136 o mándanos un correo electrónico a info@pass.com.mx\n\n
        Estamos para ayudarte.\n\n
        Atentamente:\n
        El equipo de PASS Consultores";
}

//--Si el pago fue con Oxxo
else if (isset($_POST["pay_oxxo"])) {
    $tipoPago = "Oxxo (Mercado Pago) - En espera de que el cliente realice el pago.";
    $ticket_link = $_POST["ticket_link"];
    $bodyText = 
        "<p style='font-size:17px; font-family:Verdana, Geneva, sans-serif;'>Hola $clie_nom<br><br>
        Puedes completar el pago por la cantidad de $price en la tienda OXXO más cercana.<br><br>
        El resumen de tu compra es:<br>
        Producto: $product<br>
        Pagado: $price <br><br>
        Te pedimos que imprimas el ticket o le dictes al vendedor el código del siguiente enlace: <a href='$ticket_link'>Ticket</a><br><br>
        Una vez que realices el pago, tardará de 24 a 48 hrs en acreditarse.<br>
        La entrega de tu producto se hará en 1 o 2 días hábiles posteriores a la acreditación de tu pago.<br><br>
        Atentamente:<br>
        El equipo de PASS Consultores<br><br></p>
        <img src=\"cid:firma_ecommerce\" />";

    $altBody = 
        "Hola $clie_nom\n\n
        Puedes completar el pago por la cantidad de $price en la tienda OXXO más cercana.\n\n
        El resumen de tu compra es:\n
        Producto: $product\n
        Pagado: $price \n\n
        Te pedimos que imprimas el ticket o le dictes al vendedor el código del siguiente enlace: $ticket_link\n\n
        Una vez que realices el pago, tardará de 24 a 48 hrs en acreditarse.\n
        La entrega de tu producto se hará en 1 o 2 días hábiles posteriores a la acreditación de tu pago.\n\n
        Atentamente:\n
        El equipo de PASS Consultores";
}

//--Si el pago fue con tarjeta a través de Mercado Pago o con PayPal
else {
    
    if (isset($_POST["pay_tar"])) {
        //$tipoPago = "Tarjeta (Mercado Pago)";
        $tipoPago = "Mercado Pago";
    } else if (isset($_POST["pay_paypal"])) {
        $tipoPago = "PayPal";
    }
    
    $bodyText = 
        "<p style='font-size:17px; font-family:Verdana, Geneva, sans-serif;'>Hola $clie_nom<br><br>
        Hemos recibido tu pago satisfactoriamente a través de $tipoPago.<br><br>
        El resumen de tu compra es:<br>
        Producto: $product<br>
        Pagado: $price <br><br>
        La entrega de tu producto se hará en 1 o 2 días hábiles.<br><br>
        ¡Gracias por tu compra!<br><br>
        Atentamente:<br>
        El equipo de PASS Consultores<br><br></p>
        <img src=\"cid:firma_ecommerce\" />";

    $altBody = 
        "Hola $clie_nom\n\n
        Hemos recibido tu pago satisfactoriamente a través de $tipoPago.\n\n
        El resumen de tu compra es:\n
        Producto: $product\n
        Pagado: $price \n\n
        La entrega de tu producto se hará en 1 o 2 días hábiles.\n\n
        ¡Gracias por tu compra!\n\n
        Atentamente:\n
        El equipo de PASS Consultores\n\n";
}

$result1 = sendEmail($mail, $from_email, $from_name, $subject, $bodyText, $altBody, $to_email);

$add_info = ""; //--Variable para añdir la información cuando no se logra enviar el correo al cliente
if ($result1) {
    echo "Correo 1 enviado";
} else {
    $add_info = "Nota: No fue posible enviarle el correo de confirmación al cliente!";
    echo "Mailer Error: " . $mail->ErrorInfo;
}

//--Si se requiere enviar el correo de confirmación a la cuenta de PASS
if ($mail2 || $mail3) {
    //--Se evía el correo de confirmación a alguna cuenta de PASS
    $to_email = "tupedido@pass.com.mx";
    $head_text = "Se realizó una solicitud de compra desde la página!";
    
    if ($mail3) {
        $head_text = "Se intentó hacer una compra desde la página. Pero el cliente no pudo completarla!";
        $tipoPago = $_POST["tipo_pago"];
    }
    //TODO informar del tipo de pago
    $bodyText = 
        "$head_text<br><br>
        Producto: $product<br>
        Total de la compra: $price<br>
        Tipo de pago: $tipoPago<br><br>
        A nombre de: $clie_nom.<br>
        Teléfono: $clie_tel<br>
        Correo: $clie_email<br><br>
        $add_info";

    $altBody = 
        "$head_text\n\n
        Producto: $product\n
        Total de la compra: $price\n
        Tipo de pago: $tipoPago\n\n
        A nombre de: $clie_nom.\n
        Teléfono: $clie_tel\n
        Correo: $clie_email\n\n
        $add_info";

    $result2 = sendEmail($mail, $from_email, $from_name, $subject, $bodyText, $altBody, $to_email);

    //--Si hay algún error enviando el correo a PASS
    if ($result2) {
        echo "Correo 2 enviado";
    } else {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}

function sendEmail($mail, $from_email, $from_name, $subject, $bodyText, $altBody, $to_email) {
    $mail->ClearAllRecipients();
    $mail->setFrom($from_email, $from_name);
    $mail->addAddress($to_email);
    $mail->Subject = $subject;
    $mail->Body = $bodyText;
    $mail->AltBody = $altBody;
    $mail->IsHTML(true);
    
    //send the message, check for errors
    if ($mail->send()) {
        return true;
    } else {
        return false;
    }
}

?>