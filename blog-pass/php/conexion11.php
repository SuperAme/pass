<?php
include ("conexionPrincipal.php");

    $consulta = " SELECT `texto` from `blog` WHERE id=6";

    $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    $fila6 = mysqli_fetch_array($resultado);

	mysqli_close( $conexion );
?>