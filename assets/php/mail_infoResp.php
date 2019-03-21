<?php
$nam = utf8_decode($_POST["name"]);
$ema = trim($_POST["email"]);
$tel = trim($_POST["tel"]);

$subject = utf8_decode('Solicitud de información sobre respaldos');
$bodyText = 
    "Una persona ha hecho una solicitud de información sobre los respaldos:\n\n".
	"Nombre: $nam\n" .
	"Email: $ema\n" .
    "Teléfono: $tel\n";

require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

$name = "Página PASS";
$from_email = $ema;
/*
//$mail->SMTPDebug = 4;
$mail->IsSMTP();
$mail->Host = "pass.com.mx";
$mail->SMTPAuth = true;
$mail->Username = 'desarrollo@pass.com.mx';
$mail->Password = '(ZuwRNrfI8eL';
//$mail->SMTPSecure = 'ssl';
$mail->Port = 25;
*/
$mail->setFrom($from_email, utf8_decode($name));
//$mail->addAddress("info@pass.com.mx");
$mail->addAddress("contacto@pass.com.mx");
$mail->Subject = $subject;
$mail->Body = utf8_decode($bodyText);
//$mail->IsHTML(true);
if ($mail->send()) {
    echo "Message sent!";
} else {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

function cleanString($string) {
      $string = strip_tags($string);
      $string = htmlentities($string, ENT_QUOTES,'UTF-8');
      return stripslashes($string);
}
?>