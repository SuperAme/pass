<?php   
    $conexion = new mysqli("localhost","root","","blog");

    if($conexion){
        $ruta_carpeta = "../img/blog_new/" ;
        $nombre_img = "imagen_".date("dHis").".".pathinfo($_FILES["img1"]["name"],PATHINFO_EXTENSION);
        $ruta_guardar_archivo = $ruta_carpeta . $nombre_img;
        
        if(move_uploaded_file($_FILES["img1"]["tmp_name"],$ruta_guardar_archivo)){
            echo "imagen cargada";
        }else{
            echo "error";
        }
    }else{
        echo "Error!";
    }
?>