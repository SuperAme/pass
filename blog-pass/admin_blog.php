<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="./assets/js/blog.js"></script>
    <title>Administrador | PASS</title>
</head>
<?php
echo '<pre>';
print_r($_POST);
echo '</pre>';
?>
<body>
    <div class="container">
        	<!--
					Se pasarán los datos que se recaben del formulario, por metodo POST a "conexion.php"; que se encarga de hacer la conexion
					a la base de datos, registrar los valores que se han ingresado en este formulario, a la base de datos correspondiente
				-->
		<form action="php/conexion.php" method ="POST" enctype="multipart/form-data" >
            <div class="form-group col-md-6">
                <div class="form-group">
					<label form="titulo">Titulo &nbsp; &nbsp; &nbsp;</label>
                    <input type="text" maxlength="100" name="titulo" placeholder="Titulo de la Nota " class="form-control input-sm" required>
                </div>

                <div class="form-group">
                    <label form = "correo">Resumen </label>
                    <input type="text" name="resumen" placeholder= "Resumen de la nota " class="form-control input-sm" required>
                </div>

                <div class="form-group">
                        <label form="ima">Imagen:</label> 
                        <input name="imagen" type="file">
                </div> 

                <div class="form-group">
					<textarea class="tinymce" name="texto" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary" >Subir</button>
            </div>            
        </form>
        <script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="plugin/tinymce/tinymce.min.js"></script>
		<script type="text/javascript" src="plugin/tinymce/init-tinymce.js"></script>
    </div>    
</body>
</html>