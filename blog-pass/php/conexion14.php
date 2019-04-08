<?php
include ("conexionPrincipal.php");

    $consulta = " SELECT `titulo`,`resena` from `blog` WHERE id=8 ";

    $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    $fila1 = mysqli_fetch_array($resultado);

	mysqli_close( $conexion );
?>