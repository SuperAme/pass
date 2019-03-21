<?php
$servername = "localhost";
$username = "root@localhost";
$password = "";
$dbname = "test";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    upImage();
}
else if($_SERVER["REQUEST_METHOD"] == "GET") {
    if ($_GET["action"] == "get_entradas") {
        getEntradas();
    }
    else if ($_GET["action"] == "remove") {
        remove($_GET["id"]);
    }
}

function upImage() {
    $target_dir = "../img/blog/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
    $type = $_POST["tipo"];
    
    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }
    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" && $imageFileType != "pdf") {
        echo "Sorry, only JPG, JPEG, PNG, GIF & PDF files are allowed.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
    
        switch($type) {
            case 'Imagen':
                cropImage($_FILES["fileToUpload"]);
                break;
            case 'PDF':
                cropImage($_FILES["inputprev"]);
                break;
        }
        
        move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
        newEntrada();
        //header("Location: add_blog - test.html");
        /*
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            //newEntrada();
            echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }*/
    }
}

function cropImage ($img) {
    $fn = $img["tmp_name"];
    $target_filename = "../img/blog/previews/prev_".pathinfo($img["name"], PATHINFO_FILENAME).".jpeg";
    $size = getimagesize($fn);
    //$size[0]/$size[1] = width/height
    /*
    if ($size[0] > 720) {
        $ratio = 720 / $size[0];   // get ratio for scaling image
        $width = 720; // Set new width
        $height = $size[1] * $ratio;    // Reset height to match scaled image
        //width = width * ratio;    // Reset width to match scaled image
    }
    */
    $ratio = 720 / $size[0];   // get ratio for scaling image
    $width = 720; // Set new width
    $height = $size[1] * $ratio;
    
    $src = imagecreatefromstring(file_get_contents($fn));
    $dst = imagecreatetruecolor(720,500);
    imagecopyresampled($dst,$src,0,0,0,0,$width,$height,$size[0],$size[1]);
    imagedestroy($src);
    imagejpeg($dst,$target_filename); // adjust format as needed
    imagedestroy($dst);
}

function newEntrada () {
    global $servername, $username, $password, $dbname;
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $titulo = $_POST["titulo"];
    $categoria = strtolower($_POST["categoria"]);
    $fecha = date("Y-m-d", strtotime(str_replace('/', '-', $_POST["fecha"])));
    $archivo = $_FILES["fileToUpload"]["name"];
    $type = $_POST["tipo"];
    
    switch($type) {
        case 'Imagen':
            $prev = pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_FILENAME).".jpeg";
            break;
        case 'PDF':
            $prev = pathinfo($_FILES["inputprev"]["name"], PATHINFO_FILENAME).".jpeg";
            break;
        case 'PDF de Reinstalable':
            $prev = strtolower($_POST["sist"]).'.jpg';
            break;
    }

    $sql = "INSERT INTO entradas (titulo, fecha, categoria, archivo, preview)
    VALUES ('$titulo', '$fecha', '$categoria', '$archivo', '$prev')";

    if ($conn->query($sql) === TRUE) {
        //echo "New record created successfully";
        header("Location: add_blog.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

function getEntradas() {
    global $servername, $username, $password, $dbname;
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, titulo, fecha, categoria, archivo, preview FROM entradas";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $resultArray[] = $row;
        }
        echo json_encode($resultArray);
    } else {
        echo "0 results";
    }
    $conn->close();
}

function remove($id) {
    global $servername, $username, $password, $dbname;
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT archivo, preview FROM entradas WHERE id=$id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    if(unlink("../img/blog/".$row["archivo"])) {echo "Archivo eliminado";}
    if(unlink("../img/blog/previews/prev_".$row["preview"])) {echo "Preview eliminada";}
    
    // sql to delete a record
    $sql = "DELETE FROM entradas WHERE id=$id";
    $result = $conn->query($sql);

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

    $conn->close();
}
?>