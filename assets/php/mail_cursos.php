<?php
$nam = utf8_decode($_POST["name"]);
$ema = trim($_POST["email"]);
$tel = trim($_POST["tel"]);
$subj = utf8_decode("Solicitud de curso ".$_POST["curso"]);
//$spa = cleanString($_POST["spam"]);
$to="cursos@pass.com.mx";

$message = 
	"Nombre: $nam\n\n" .
	"Email: $ema\n\n" .
    "Teléfono: $tel\n\n" .
	"Asunto: $subj\n\n";
$sub_client = utf8_decode("Cursos PASS");
if(mail($to,utf8_decode("Página PASS - Curso ".$_POST["curso"]), $message, "FROM: $ema")){
	$subject = utf8_decode("Correo recibido PASS Consultores");
    $txt = "Hemos recibido tu correo, en breve nos pondremos en contacto contigo.\n\n".
    "El equipo de PASS Consultores.\n".
    "(01)55 56.78.51.36";
    $headers = "From: $to"; //. "\r\n" . "CC: somebodyelse@example.com";
    if(mail($ema,$subject,$txt,$headers)) {
        echo true;
    }
    //sleep(4);
    //header("Location: contact.html");
    die();
}
else{
	echo false;
}

function cleanString($string) {
      $string = strip_tags($string);
      $string = htmlentities($string, ENT_QUOTES,'UTF-8');
      return stripslashes($string);
}
?>