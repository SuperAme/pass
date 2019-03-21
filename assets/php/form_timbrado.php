<?php
$to = "escritorios@pass.com.mx";
//$to = "doulos.emmanuel@gmail.com";
$subject = "Timbrado";

$rzns = $_POST["inputrznsocial"];
$rfc = $_POST["inputrfc"];
$contacto = $_POST["inputcontacto"];
$email = $_POST["inputemail"];
$tel = $_POST["inputtel"];
$user = $_POST["inputusuario"];
$pass = $_POST["inputpass"];
    
$txt = 
    "Razón Social: $rzns\n\n".
    "RFC: $rfc\n\n".
    "Contacto: $contacto\n\n".
    "Email: $email\n\n".
    "Tel: $tel\n\n".
    "Usuario Aspel: $user\n\n".
    "Contraseña Aspel: $pass\n\n";

$headers = "From: $email"; //. "\r\n" . "CC: somebodyelse@example.com";


if(mail($to,$subject,utf8_decode($txt),$headers)){
    echo true;
    $subject = utf8_decode("Confirmación de Compra PASS Consultores");
    $txt = "Hemos recibido tu solicitud, muchas GRACIAS, en breve nos pondremos en contacto contigo.\n\n".
    "El equipo de PASS Consultores.\n".
    "(01)55 56.78.51.36";
    $headers = "From: $to"; //. "\r\n" . "CC: somebodyelse@example.com";
    mail($email,$subject,$txt,$headers);
    /*
    sleep(4);
    header("Location: servicios.html");
    */
    die();
}

function cleanString($string) {
      $string = strip_tags($string);
      $string = htmlentities($string, ENT_QUOTES,'UTF-8');
      return stripslashes($string);
}

?>