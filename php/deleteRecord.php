<?php 

require_once '../constant/connection.php';

$id=mysqli_real_escape_string($con,$_POST['id']);
//$searchValue="asd";


$deletequery = "delete from chemicals_details where id=".$id.";";
$result=mysqli_query($con,$deletequery) or die(mysqli_error($con));

			


$json='{"error":0}';


echo $json;

mysqli_close($con);
?>
