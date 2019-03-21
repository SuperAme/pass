<?php
//echo password_hash("SE@dmin2017", PASSWORD_DEFAULT)."\n";
session_start();
$curso = $_POST["c"];
if ($curso == $_SESSION["cursos"]) {
    echo true;
} else {
    echo "El usuario no tiene activado ese curso.";
}

?>