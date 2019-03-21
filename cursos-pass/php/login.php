<?php
require_once 'passwordLib.php';
//echo password_hash("SE@dmin2017", PASSWORD_DEFAULT)."\n";
session_start();
/*
$servername = "localhost";
$username = "root";
$password = "XeyhJpQWRrL8ChRJ";
$dbname = "test";
$port = 3306;
*/

$servername = "localhost";
$username = "passcom_des";
$password = "vpOs])Tc[Uz$";
$dbname = "passcom_cursos";
$port = 3306;

$conn = new mysqli($servername, $username, $password, $dbname, $port);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST["login"])) {
    $x = $_POST['x'];

    $sql = "SELECT * FROM users WHERE user_name = '$x'";

    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
    }

    $hash = $row['user_password'];
    
    $activo = $row['activo'];
    
    $cursos = $row['cursos'];

    $a = $_POST['a'];

    if (password_verify($a, $hash) && $activo == 1) {
        echo 'true';
        $id = $row['id'];
        $_SESSION["userId"] = "$id";
        $_SESSION["userName"] = "$x";
        $_SESSION["password"] = "$a";
        $_SESSION["cursos"] = "$cursos";
    } else {
        echo 'Usuario o contraseña inválido!';
    }
}

if (isset($_POST["logout"])) {
    session_unset();
}

$conn->close();

?>