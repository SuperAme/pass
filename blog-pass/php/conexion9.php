<?php
include ("conexionPrincipal.php");

    $consulta = " SELECT titulo,texto from `blog` WHERE id=5 ";

    $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    $fila9 = mysqli_fetch_array($resultado);

	mysqli_close( $conexion );
?>