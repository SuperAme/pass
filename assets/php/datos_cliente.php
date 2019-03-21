<?php
require 'PHPMailerAutoload.php';

$to = "facturacion@pass.com.mx";
//$to = "desarrollo@pass.com.mx";
$subject = "Datos del Cliente";

$rzns = strtoupper($_POST["inputrznsocial"]);
$rfc = strtoupper($_POST["inputrfc"]);
$calle = ucwords(strtolower($_POST["inputcalle"]));
$ext = $_POST["inputext"];
$int = $_POST["inputint"];
$col = ucwords(strtolower($_POST["inputcol"]));
$cp = $_POST["inputcp"];
$del = ucwords(strtolower($_POST["inputdel"]));
$estado = ucwords(strtolower($_POST["inputestado"]));
$contacto = ucwords(strtolower($_POST["inputcontacto"]));
$email = $_POST["inputemail"];
$tel = $_POST["inputtel"];
$usoCfdi = $_POST["usoCfdi"];
$formaPago = $_POST["formaPago"];
$pais = ucwords(strtolower($_POST["inputpais"]));
$numcta = $_POST["inputcta"];

$nomc = ucwords(strtolower($_POST["inputcontactoc"]));
$telc = $_POST["inputtelc"];
$emailc = $_POST["inputemailc"];

$nac = "";
if ($pais == "México") $nac = "Mexicana";

if ($estado == "Ciudad De México") $estado = "CDMX";

$bodyText = 
    "Razón Social: $rzns\n".
    "RFC: $rfc\n".
    "Dirección: $calle #$ext, Int: $int, "."Col: $col, Del: $del, $estado, $pais, CP: $cp.\n".
    "Responsable: $contacto\n".
    "Email: $email\n".
    "Tel: $tel\n".
    "Uso de CFDI: $usoCfdi\n".
    "Forma de pago SAT: $formaPago\n".
    "Número de cuenta: $numcta\n\n".
    "Contacto de cobranza: $nomc\n".
    "Tel: $telc\n".
    "Email: $emailc\n";

//$from_email = $to;

$mail = new PHPMailer;
$mail->setFrom("info@pass.com.mx");
$mail->addAddress($to);
$mail->Subject = $subject;
$mail->Body = utf8_decode($bodyText);
//$mail->IsHTML(true);

$string = "Clave del Cliente,A,$rzns,$rfc,$calle,$int,$ext,,,$col,$cp,$del,$del,$estado,$pais,$nac,,$tel,,,,,,S,S,,$email,,,S,0,,,,,,,,,,,,,M,,,,,,,,,,,,,,,,,,,".substr($formaPago,0,2).",$numcta,,,,,,".substr($usoCfdi,0,3).",,,".substr($formaPago,0,2);

$txtFileName = "Cliente_".$rfc.".txt";
$txtfile = fopen($txtFileName, "w") or die("Unable to open file!");
fwrite($txtfile, utf8_decode($string));
fclose($txtfile);
$txtPath = realpath($txtFileName);

$mail->addAttachment($txtPath);

//send the message, check for errors
if ($mail->send()) {
    //echo "Message sent!";
    unlink($txtPath);
    echo "success";
    /*sleep(4);
    header("Location: servicios.html");
    die();*/
} else {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

/*
$headers = "From: $email"; //. "\r\n" . "CC: somebodyelse@example.com";

//echo $txt;

if(mail($to,$subject,utf8_decode($txt),$headers)){
    $subject = utf8_decode("Confirmación de datos");
    $txt = "Hemos recibido tus datos, muchas GRACIAS!\n\n".
    "El equipo de PASS Consultores.\n".
    "(01)55 56.78.51.36";
    $headers = "From: $to"; //. "\r\n" . "CC: somebodyelse@example.com";
    if (mail($email,$subject,$txt,$headers)) {
        sleep(4);
        header("Location: servicios.html");
        die();
    } else {
        error_get_last()['message'];
        echo error_get_last();
    }
} else {
    error_get_last()['message'];
    echo error_get_last();
}
*/
function cleanString($string) {
      $string = strip_tags($string);
      $string = htmlentities($string, ENT_QUOTES,'UTF-8');
      return stripslashes($string);
}

?>