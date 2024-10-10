<?php
// Connect to MySQL
$mysqli = new mysqli('localhost', 'root', '', 'property_db');

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}