<?php
require_once 'passwordLib.php';
//echo password_hash("SE@dmin2017", PASSWORD_DEFAULT)."\n";
session_start();

/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "passcom_blog";*/



$servername = "localhost";
$username = "passcom_des";
$password = "vpOs])Tc[Uz$";
$dbname = "passcom_blog";



$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST["login"])) {
    $x = $_POST['x'];

    $sql = "SELECT * FROM users WHERE user_name = '$x'";

    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo $row[0];
    }

    

    $a = $_POST['a'];
   

    if ($x == 'admin' && $a == '2019$pass') {
        echo 'true';        
        $_SESSION["userName"] = "$x";
        $_SESSION["password"] = "$a";        
    } else {
        echo 'Usuario o contraseña inválido!';
    }
}

if (isset($_POST["logout"])) {
    session_unset();
}

$conn->close();

?>