<?php
//echo password_hash("SE@dmin2017", PASSWORD_DEFAULT)."\n";
require_once 'passwordLib.php';
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


$userName = $_SESSION["userName"];
$psw = $_SESSION["password"];
$activo = $_SESSION["activo"];

$sql = "SELECT * FROM users WHERE user_name = '$userName'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
}

$hash = $row['user_password'];
$activo = $row['activo'];

if (password_verify($psw, $hash) && $activo == "1") {
    //echo 'true';
    //echo json_encode($row);
    echo $userName;
} else {
    echo 'false';
    //session_unset();
}

$conn->close();
?>