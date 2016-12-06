<?php 

session_start();
require_once 'connection.php';

$productname=mysqli_real_escape_string($con,$_POST['productName']);
$casno=mysqli_real_escape_string($con,$_POST['casNo']);



$insertquery='insert into chemicals_details(product_name,cas_no) values("'.$productname.'","'.$casno.'")' ;
$result=mysqli_query($con,$insertquery) or die(mysqli_error($con));


echo '{"error":0}';



	
mysqli_close($con);
?>