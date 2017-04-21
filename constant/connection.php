<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
//require_once '/home/saradhi66/public_html/phpmailer/PHPMailerAutoload.php';

$db_host="localhost";
$db_user="root";
$db_password="root";
$db_name="saradhi_organics";



$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error($con));


?>
