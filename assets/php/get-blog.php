<?php

$servername = "localhost";
$username = "passcom_bloger";
$password = "IO287K=QE&.%";
$dbname = "passcom_blog";


/*
$servername = "localhost";
$username = "root@localhost";
$password = "";
$dbname = "test";
*/

if($_SERVER["REQUEST_METHOD"] == "GET") {
    if ($_GET["action"] == "get_entradas") {
        getEntradas();
    }
}

function getEntradas() {
    global $servername, $username, $password, $dbname;
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, titulo, fecha, categoria, archivo, preview 
    FROM entradas
    ORDER BY fecha DESC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $resultArray[] = $row;
        }
        echo json_encode($resultArray);
    } else {
        echo false;
    }
    $conn->close();
}

?>