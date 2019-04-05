<?php
	/*
	Datos de la base de datos
	*/
	
	$servidor="localhost";
	$usuario="passcom_admin";
	$password="2019_pass";
	$basededatos="passcom_blog_pass";

	/*$servidor="localhost";
	$usuario="root";
	$password="";
	$basededatos="blog_pass";*/
	

	
	/*
	Creación de la conexión a la base de datos con mysql_connect()
	*/
	$conexion = mysqli_connect($servidor, $usuario, $password ) or die ("No se ha podido conectar al servidor de Base de datos");
	
	/* 
	Selección de la base de datos a utilizar
	*/
    $db = mysqli_select_db( $conexion, $basededatos ) or die ( "Hay un problema con el nombre de su base de datos" );

    $consulta = " SELECT `titulo`,`resena` from `blog` WHERE id=3 ";

    $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    $fila3 = mysqli_fetch_array($resultado);

	mysqli_close( $conexion );

  
    

    ?>