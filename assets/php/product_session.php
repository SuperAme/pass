<?php
session_start();
if (isset($_POST["set_product"])) {
    // Set session variables
    $_SESSION["product_desc"] = $_POST["desc"];
    $_SESSION["product_price"] = $_POST["price"];
}

if (isset($_POST["get_product"])) {
    // Set session variables
    $desc = $_SESSION["product_desc"];
    $price = $_SESSION["product_price"];
    $productData = array("desc" => $desc, "price" => $price);
    echo json_encode($productData);
}

if (isset($_POST["quit_product"])) {
    // remove all session variables
    session_unset();
}

?>