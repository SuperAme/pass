<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

//$from_email = "cursos@pass.com.mx";
$from_email = "contacto@pass.com.mx"
$name = "PASS Consultores";

//$mail->SMTPDebug = 4;
$mail->CharSet="utf-8";
$mail->IsSMTP();
$mail->Host = "pass.com.mx";
$mail->SMTPAuth = true;
//$mail->Username = 'cursos@pass.com.mx';
$mail->Username = 'contacto@pass.com.mx';
//$mail->Password = 'CV7YKqkMGJxD';
$mail->Password = '4jsPVh4r8xhQ';
//$mail->SMTPSecure = 'tls';
$mail->Port = 25;
//--Se añade la imagen de la firma al correo
$mail->AddEmbeddedImage("../img/firma_ecommerce.png", "firma_ecommerce");

//--Variables para los correos
$to_email = $_POST["email"];
$curso = $_POST["curso"];
$price = $_POST["price"];
$clie_nom = $_POST["nombre"];
$clie_tel = $_POST["tel"];
$clie_email = $_POST["email"];
$obs = $_POST["obs"];
$fecha = $_POST["fecha"];
$bodyText = "";
$altBody = "";

//--Asunto del correo
$subject = "Reservación de Curso: $curso";

$bodyText = 
    "<p style='font-size:17px; font-family:Verdana, Geneva, sans-serif;'>Hola, $clie_nom<br><br>
    Recibimos tu solicitud de reservación para el curso: $curso, del día $fecha<br><br>
    En breve nos pondremos en contacto contigo para revisar los detalles.<br><br>
    Atentamente:<br>
    El equipo de PASS Consultores<br><br></p>
    <img src=\"cid:firma_ecommerce\" />";

$altBody = 
    "Hola, $clie_nom\n\n
    Recibimos tu solicitud de reservación para el curso: $curso, del día $fecha\n\n
    En breve nos pondremos en contacto contigo para revisar los detalles.\n\n
    Atentamente:\n
    El equipo de PASS Consultores";

$result1 = sendEmail($mail, $from_email, $from_name, $subject, $bodyText, $altBody, $to_email);

$add_info = ""; //--Variable para añdir la información cuando no se logra enviar el correo al cliente
if ($result1) {
    echo "Correo 1 enviado";
} else {
    $add_info = "Nota: No fue posible enviarle el correo de confirmación al cliente!";
    echo "Mailer Error: " . $mail->ErrorInfo;
}

//--Se evía el correo de confirmación a alguna cuenta de PASS
$to_email2 = "cursos@pass.com.mx";
$bodyText = 
    "Se realizó una solicitud de reservación para el curso: $curso, del día: $fecha<br><br>
    A nombre de: $clie_nom.<br>
    Teléfono: $clie_tel<br>
    Correo: $clie_email<br>
    Obsservaciones: $obs<br><br>
    $add_info";

$result2 = sendEmail($mail, $from_email, $from_name, $subject, $bodyText, $altBody, $to_email2);

//--Si hay algún error enviando el correo a PASS
if ($result2) {
    echo "Correo 2 enviado";
} else {
    echo "Mailer Error: " . $mail->ErrorInfo;
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