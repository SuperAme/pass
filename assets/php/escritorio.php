<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

$to = "escritorios@pass.com.mx";
$subject = "Alta Escritorio Remoto";

//$mail->SMTPDebug = 4;
$mail->CharSet="utf-8";
$mail->IsSMTP();
$mail->Host = "pass.com.mx";
$mail->SMTPAuth = true;
$mail->Username = 'escritorios@pass.com.mx';//sirve para iniciar sesión en el servidor de correo
$mail->Password = 'MbcQ9nkXJKyx';
//$mail->SMTPSecure = 'tls';
$mail->Port = 25;
$mail->AddEmbeddedImage("../img/firma_ecommerce.png", "firma_ecommerce");

$rzns = $_POST["inputrznsocial"];
$curp = $_POST["inputcurp"];
$rfc = $_POST["inputrfc"];
$calle = $_POST["inputcalle"];
$int = $_POST["inputint"];
$col = $_POST["inputcol"];
$cp = $_POST["inputcp"];
$del = $_POST["inputdel"];
$cd = $_POST["inputcd"];
$contacto = $_POST["inputcontacto"];
$email = $_POST["inputemail"];
$tel = $_POST["inputtel"];
$sist = $_POST["inputsist"];
$nusers = $_POST["inputnumusers"];
$tpago = $_POST["inputpago"];
$otroS = $_POST["optradio"];


$bodyText = 
    "<p style='font-size:17px; font-family:Verdana, Geneva, sans-serif;'>Hemos recibido tu solicitud, con los siguientes datos:<br>Rázon Social: $rzns <br> RFC: $rfc<br> Calle: $calle # $int<br> Colonia:  $col, C.P.: $cp<br> Del.: $del <br> Ciudad: $cd <br>Contacto: $contacto<br> Correo: $email<br> Telefono: $tel<br>Sistema Aspel: $sist<br>Num. Usuarios: $nusers<br> Forma de pago: $tpago<br> Otro sistema: $otroS.<br><br>".
    "Muchas gracias, en breve nos pondremos en contacto contigo. <br><br> PASS Consultores.<br>".
    "(01)55 56.78.51.36</p><br> <img src=\"cid:firma_ecommerce\" /></p>";

$altBody = "Se ha recibido una solicitud de $rzns, con los siguientes datos:<br> RFC: $rfc<br> Calle: $calle # $int<br> Colonia:  $col<br> C.P.: $cp<br> Del.: $del <br> Ciudad: $cd <br>Contacto: $contacto<br> Correo: $email<br> Telefono: $tel<br>Sistema Aspel: $sist<br>Num. Usuarios: $nusers<br> Forma de pago: $tpago<br> Otro sistema: $otroS.";//llega si no se envia body Text

//

$result1 = sendEmail($mail, $to, $from_name, $subject, $bodyText, $altBody, $email);

$add_info = ""; //--Variable para añdir la información cuando no se logra enviar el correo al cliente
if ($result1) {
    sleep(2);
    header("location: https://www.pass.com.mx/servicios/");
    //echo "Correo 1 enviado";   
} else {
    $add_info = "Nota: No fue posible enviarle el correo de confirmación al cliente!";
    echo "Mailer Error: " . $mail->ErrorInfo;
}
//--Se evía el correo de confirmación a alguna cuenta de PASS
$to_email2 = "escritorios@pass.com.mx";
$bodyText = 
    "<p style='font-size:17px; font-family:Verdana, Geneva, sans-serif;'>Se ha recibido una solicitud de $rzns, con los siguientes datos:<br> RFC: $rfc<br> Calle: $calle # $int<br> Colonia:  $col<br> C.P.: $cp<br> Del.: $del <br> Ciudad: $cd <br>Contacto: $contacto<br> Correo: $email<br> Telefono: $tel<br>Sistema Aspel: $sist<br>Num. Usuarios: $nusers<br> Forma de pago: $tpago<br> Otro sistema: $otroS.<br><br>".
    "<img src=\"cid:firma_ecommerce\" /></p>";

$result2 = sendEmail($mail, $to, $from_name, $subject, $bodyText, $altBody, $to_email2);

if ($result2) {
    sleep(2);
    header("location: https://www.pass.com.mx/servicios/");
    //echo "Correo 2 enviado";
} else {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

function sendEmail($mail, $to, $from_name, $subject, $bodyText, $altBody, $email) {
    $mail->ClearAllRecipients();
    $mail->setFrom($to, $from_name);
    $mail->addAddress($email);
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

/*if(mail($to,$subject,utf8_decode($txt),$headers)){
    $subject = utf8_decode("Confirmación Escritorio Aspel");
    $txt = "Hemos recibido tu solicitud, muchas GRACIAS, en breve nos pondremos en contacto contigo.\n\n".
    "El equipo de PASS Consultores.\n".
    "(01)55 56.78.51.36";
    $headers = "From: $to"; //. "\r\n" . "CC: somebodyelse@example.com";
    mail($email,$subject,$txt,$headers);
    sleep(4);
    header("Location: servicios.html");
    die();
}

function cleanString($string) {
      $string = strip_tags($string);
      $string = htmlentities($string, ENT_QUOTES,'UTF-8');
      return stripslashes($string);
}*/

?>