<?php 
//require_once '/home/vijaymerakii007/public_html/phpmailer/PHPMailerAutoload.php';

$db_host="localhost";
$db_user="saradhi";
$db_password="Saradhi@2";
$db_name="saradhi_organics";



$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error($con));


?>
