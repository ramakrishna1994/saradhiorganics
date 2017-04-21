<?php 

session_start();
require_once '../constant/connection.php';

$productname=mysqli_real_escape_string($con,$_POST['productName']);
$casno=mysqli_real_escape_string($con,$_POST['casNo']);
$id=mysqli_real_escape_string($con,$_POST['id']);



$updatequery='update chemicals_details set product_name="'.$productname.'",cas_no="'.$casno.'" where id='.$id.';';
$result=mysqli_query($con,$updatequery) or die(mysqli_error($con));


echo '{"error":0}';



	
mysqli_close($con);
?>