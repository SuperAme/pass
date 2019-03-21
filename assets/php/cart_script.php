<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();
    //$carProds = $_POST["shopCar"];
    $_SESSION["carProds"] = $_POST["carProds"];
    //echo $carProds[0]["desc"];
}
else if($_SERVER["REQUEST_METHOD"] == "GET") {
    session_start();
    $carProds = $_SESSION["carProds"];
    echo json_encode($carProds);
}
?>