<?php 

require_once '../constant/connection.php';

$id=mysqli_real_escape_string($con,$_POST['id']);
//$searchValue="asd";


$selectquery = "select * from chemicals_details where id =".$id.";";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$error = 1;
$json='{';
while($row = mysqli_fetch_array($result)){
	
	$error = 0;
	$json.='"id":'.$row['id'].',';
	$json.='"productName":"'.$row['product_name'].'",';
	$json.='"casNo":"'.$row['cas_no'].'",';
			
}
			


$json.='"error":'.$error.'}';


echo $json;

mysqli_close($con);
?>
