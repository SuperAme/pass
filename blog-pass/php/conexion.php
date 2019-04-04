<?php
	/*
	Datos de la base de datos
	*/

	$servidor="localhost";
	$usuario="root";
	$password="";
	$basededatos="blog_pass";

	$v1=$_POST['titulo'];
	$v2=$_POST['resumen'];
	$v3=$_POST['texto'];	
	
	/*
	Creación de la conexión a la base de datos con mysql_connect()
	*/
	$conexion = mysqli_connect($servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");
	
	/* 
	Selección de la base de datos a utilizar
	*/
	$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Hay un problema con el nombre de su base de datos" );
	/* 
	Una vez realiza la conexión, procederemos a hacer la consulta correspondiente.
	En este caso vamos insertar e la base de datos los datos que se hayan ingresado en el formulario
	*/
	$consulta = "INSERT INTO blog (id,titulo,resena,texto) VALUES (1,'$v1','$v2','$v3')";
	$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

	/*
	Codigo para subir la imagen a una carpeta, cabe señalar que esta imagen no se guarda en la base de datos,
	lo único que hace es guardarla directamente en la carpeta
	*/ 
	$nombre ="../img/img1.png";
	$nombrer = strtolower($nombre);
	$cd=$_FILES["imagen"]['tmp_name'];
	echo "$cd";
	$ruta = "../img/img1.png";
	//$destino = "img/".$nombrer;
	$destino="../img/img1.png";
	$resultado = @move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta);
	if (!empty($resultado)){        
    		echo "el archivo ha sido movido exitosamente";
	}
	else{
		echo "el archivo no se subio correctamente";
	}

    /* Codigo por si alguna vez se quisiera guardar la imagen en la base de datos               
	 			if (!empty($resultado)){
               
            
                    mysqli_query($conexion,"INSERT INTO fotos VALUES ('". $nombre."','" . $destino . "')"); 
                    echo "el archivo ha sido movido exitosamente";

                }else{

                    echo "Error al subir el archivo";

                    }
    */
	
	mysqli_close( $conexion );



	


?>