<?php
$servername = "localhost";
$username = "passcom_stats";
$password = "Gq41rh5AhdDL";
$dbname = "passcom_videostats";
$port = 3306;

if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

if($_SERVER['REQUEST_METHOD'] == "POST") {
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname, $port);
    mysqli_set_charset($conn,"utf8");
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
    
    if (isset($_POST["count_completo"])) {
        $now = date("Y-m-d H:i:s");
        
        $sql = "UPDATE video_stats
        SET last_view = '$now', num_views = num_views + 1
        WHERE view_type = 'completo'";
        
        if ($conn->query($sql) === TRUE) {
            echo "Updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
	}
    
    if (isset($_POST["count_play"])) {
        $now = date("Y-m-d H:i:s");
        
        $sql = "UPDATE video_stats
        SET last_view = '$now', num_views = num_views + 1
        WHERE view_type = 'play'";
        
        if ($conn->query($sql) === TRUE) {
            echo "Updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
	}
    
    if (isset($_POST["count_5min"])) {
        $now = date("Y-m-d H:i:s");
        
        $sql = "UPDATE video_stats
        SET last_view = '$now', num_views = num_views + 1
        WHERE view_type = '5min'";
        
        if ($conn->query($sql) === TRUE) {
            echo "Updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
	}
    
    if (isset($_POST["count_10min"])) {
        $now = date("Y-m-d H:i:s");
        
        $sql = "UPDATE video_stats
        SET last_view = '$now', num_views = num_views + 1
        WHERE view_type = '10min'";
        
        if ($conn->query($sql) === TRUE) {
            echo "Updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
	}
    
    if (isset($_POST["get_views"])) {
        
        $sql = "SELECT * FROM video_stats";
        
        arrayResult($conn, $sql);
	}
    
    $conn->close();
}

function arrayResult($conn, $sql) {
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        $rows = array();
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        //$rows = array_map('utf8_encode_array', $rows);
        echo json_encode($rows);
    } else {
        $cero = array("0 results");
        echo json_encode($cero);
        //printf("Error: %s\n", $conn->error);
    }
}

?>