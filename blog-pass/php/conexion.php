<?php
include ("conexionPrincipal.php");
	$v1=$_POST['titulo'];
	$v2=$_POST['resumen'];
	$v3=$_POST['texto'];	

	if($_POST['opciones'] == 'valor_1'){
			/* 
			Una vez realiza la conexión, procederemos a hacer la consulta correspondiente.
			En este caso vamos insertar e la base de datos los datos que se hayan ingresado en el formulario
			*/
			$consulta = "UPDATE blog set titulo='$v1', resena='$v2', texto='$v3' where id=1";
			$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

			/*
			Codigo para subir la imagen a una carpeta, cabe señalar que esta imagen no se guarda en la base de datos,
			lo único que hace es guardarla directamente en la carpeta
			*/ 
			$nombre ="../img/img1.png";
			$nombrer = strtolower($nombre);
			$cd=$_FILES["imagen"]['tmp_name'];
			$ruta = "../img/img1.png";
			//$destino = "img/".$nombrer;
			$destino="../img/img1.png";
			$resultado = @move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta);
			if (!empty($resultado)){        
				header('Location: ../admin_blog.html');
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
	}
	else{
		if($_POST['opciones'] == 'valor_2'){
			/* 
			Una vez realiza la conexión, procederemos a hacer la consulta correspondiente.
			En este caso vamos insertar e la base de datos los datos que se hayan ingresado en el formulario
			*/
			$consulta = "UPDATE blog set titulo='$v1', resena='$v2', texto='$v3' where id=2";
			$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

			/*
			Codigo para subir la imagen a una carpeta, cabe señalar que esta imagen no se guarda en la base de datos,
			lo único que hace es guardarla directamente en la carpeta
			*/ 
			$nombre ="../img/img2.png";
			$nombrer = strtolower($nombre);
			$cd=$_FILES["imagen"]['tmp_name'];
			$ruta = "../img/img2.png";
			//$destino = "img/".$nombrer;
			$destino="../img/img2.png";
			$resultado = @move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta);
			if (!empty($resultado)){        
				header('Location: ../admin_blog.html');
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
		}//fin del if para la opción 2
		else{
			if($_POST['opciones'] == 'valor_3'){
				/* 
				Una vez realiza la conexión, procederemos a hacer la consulta correspondiente.
				En este caso vamos insertar e la base de datos los datos que se hayan ingresado en el formulario
				*/
				$consulta = "UPDATE blog set titulo='$v1', resena='$v2', texto='$v3' where id=3";
				$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");
	
				/*
				Codigo para subir la imagen a una carpeta, cabe señalar que esta imagen no se guarda en la base de datos,
				lo único que hace es guardarla directamente en la carpeta
				*/ 
				$nombre ="../img/img3.png";
				$nombrer = strtolower($nombre);
				$cd=$_FILES["imagen"]['tmp_name'];
				$ruta = "../img/img3.png";
				//$destino = "img/".$nombrer;
				$destino="../img/img3.png";
				$resultado = @move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta);
				if (!empty($resultado)){        
					header('Location: ../admin_blog.html');
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
			}//fin del if para la opción 3
			else{
				if($_POST['opciones'] == 'valor_4'){
					/* 
					Una vez realiza la conexión, procederemos a hacer la consulta correspondiente.
					En este caso vamos insertar e la base de datos los datos que se hayan ingresado en el formulario
					*/
					$consulta = "UPDATE blog set titulo='$v1', resena='$v2', texto='$v3' where id=4";
					$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");
		
					/*
					Codigo para subir la imagen a una carpeta, cabe señalar que esta imagen no se guarda en la base de datos,
					lo único que hace es guardarla directamente en la carpeta
					*/ 
					$nombre ="../img/img4.png";
					$nombrer = strtolower($nombre);
					$cd=$_FILES["imagen"]['tmp_name'];
					$ruta = "../img/img4.png";
					//$destino = "img/".$nombrer;
					$destino="../img/img4.png";
					$resultado = @move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta);
					if (!empty($resultado)){        
						header('Location: ../admin_blog.html');
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
				}//fin del if para la opción 2
			}
		}
	}
	mysqli_close( $conexion );
?>