<?php 

require_once 'connection.php';

$searchValue=mysqli_real_escape_string($con,$_POST['searchValue']);
//$searchValue="asd";


$selectquery = "select * from chemicals_details where catalogue_no like '%".$searchValue."%' or product_name like '%".$searchValue."%' or cas_no like '%".$searchValue."%' or application like '%".$searchValue."%';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$error = 1;
$json = "[";

while($row = mysqli_fetch_array($result)){
	$error = 0;
	$json.='{';
	$json.='"catalogueNo":"'.$row['catalogue_no'].'",';
	$json.='"productName":"'.$row['product_name'].'",';
	$json.='"casNo":"'.$row['cas_no'].'",';
	$json.='"application":"'.$row['application'].'"';
	$json.='},';
			
}
			


$json.='{"error":'.$error.'}]';


echo $json;

mysqli_close($con);
?>