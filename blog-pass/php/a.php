<?php
//echo password_hash("SE@dmin2017", PASSWORD_DEFAULT)."\n";

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

$sql = "SELECT * FROM users WHERE user_name = 'Administrador'";

$result = $conn->query($sql);

 if ($result->num_rows > 0) {
     $row = $result->fetch_assoc();
 }

$hash = $row['user_password'];

$a = $_POST['a'];

if (password_verify($a, $hash)) {
    echo 'true';
} else {
    echo 'La contraseña es incorrecta!';
}

$conn->close();

?>