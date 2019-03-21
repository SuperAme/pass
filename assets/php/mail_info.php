<?php
$nam = utf8_decode($_POST["nombre"]);
$ema = trim($_POST["email"]);
$tel = trim($_POST["tel"]);
$message = $_POST["message"];
$asunto = $_POST["asunto"];
$curso = $_POST["select_curso"];

$subject = "Solicitud de información sobre: $asunto $curso";
$bodyText = 
    "Una persona ha hecho una solicitud de información sobre: $asunto $curso\n\n".
	"Nombre: $nam\n" .
	"Email: $ema\n" .
    "Teléfono: $tel\n".
    "Mensaje: $message";

require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

$name = "Página PASS";
$from_email = $ema;

//$mail->SMTPDebug = 4;
$mail->CharSet="utf-8";
$mail->IsSMTP();
$mail->Host = "pass.com.mx";
$mail->SMTPAuth = true;
$mail->Username = 'contacto@pass.com.mx';
$mail->Password = '4jsPVh4r8xhQ';
//$mail->SMTPSecure = 'tls';
$mail->Port = 25;

$mail->setFrom($from_email, $name);
//$mail->addAddress("info@pass.com.mx");
$mail->addAddress("contacto@pass.com.mx");
$mail->Subject = $subject;
$mail->Body = $bodyText;
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