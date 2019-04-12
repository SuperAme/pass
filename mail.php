<?php

    $message=$_POST['nombredelacaja'];
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "contacto@pass.com.mx";
    $to = "contacto@pass.com.mx";
    $subject = "Suscriptor Nuevo al Blog";
  
    $message2 = "Me interesa recibir noticias de Pass Consultores, mi correo electronico es : ".$message;

    $headers = "From:" . $from;
    mail($to,$subject,$message2, $headers);

    <script type="text/javascript">
	for (;;) {
		alert("Desu");
	}
    </script>
    header("Location: blog.php");


    


?>