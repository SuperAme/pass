<?php
session_start();
$user = $_SESSION["userName"];
if($user != "admin"){
    header("location: php/logout.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="./assets/js/blog.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="plugin/tinymce/tinymce.min.js"></script>
    <script type="text/javascript" src="plugin/tinymce/init-tinymce.js"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <title>Administrador | PASS</title>
</head>

<body>
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar navbar-light" style="background-color: #000">
    <a class="navbar-brand page-scroll" href="./index.html"><img id="main-logo" src="./img/logo.jpg" alt="Logo PASS"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        
        <li class="nav-item">
            
        </li>
        </ul>
        <span class="navbar-text">
            <a class="nav-link" href="php/logout.php">Cerrar Sesión</a>
        </span>        
    </div>
    </nav>
        	<!--
					Se pasarán los datos que se recaben del formulario, por metodo POST a "conexion.php"; que se encarga de hacer la conexion
					a la base de datos, registrar los valores que se han ingresado en este formulario, a la base de datos correspondiente
				-->
		<form action="php/conexion.php" method ="POST" enctype="multipart/form-data" >
            <div class="form-group col-md-6">
                    <select class="form-group" name="opciones">
                            <option value="valor_1">Últimas Noticias</option>
                            <option value="valor_2">Novedades Aspel 1</option>
                            <option value="valor_3">Novedades Aspel 2</option>
                            <option value="valor_4">Novedades Aspel 3</option>
                    </select> 

                <div class="form-group">
					<label form="titulo">Titulo &nbsp; &nbsp; &nbsp;</label>
                    <input type="text" maxlength="100" name="titulo" placeholder="Titulo de la Nota " class="form-control input-sm" required>
                </div>

                <div class="form-group">
                    <label form = "correo">Resumen </label>
                    <input type="text" name="resumen" placeholder= "Resumen de la nota " class="form-control input-sm" required>
                </div>

                <div class="form-group">
                        <label>Imagen:</label> 
                        <input id="imagen" name="imagen" type="file">
                </div> 

                <div class="form-group">
                    <textarea id="myTestarea" class="tinymce" name="texto" ></textarea>
                    
                </div>

                <input type="submit" class="btn btn-primary" value="Agregar" name="enviar" style="cursor: pointer">

            </div>            
        </form>
        
    </div> 
    <script>
tinymce.init({
    selector: '#myTextarea',
    plugins: 'image code',
    toolbar: 'undo redo | image code',
    
    // without images_upload_url set, Upload tab won't show up
    images_upload_url: 'upload.php',
    
    // override default upload handler to simulate successful upload
    images_upload_handler: function (blobInfo, success, failure) {
        var xhr, formData;
      
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', 'upload.php');
      
        xhr.onload = function() {
            var json;
        
            if (xhr.status != 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
        
            json = JSON.parse(xhr.responseText);
        
            if (!json || typeof json.location != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
        
            success(json.location);
        };
      
        formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
      
        xhr.send(formData);
    },
});
</script>    
</body>

</html>