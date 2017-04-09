<?php 

require_once '../constant/connection.php';

$searchValue=mysqli_real_escape_string($con,$_POST['searchValue']);
//$searchValue="asd";


$selectquery = "select * from chemicals_details where product_name like '%".$searchValue."%' or cas_no like '%".$searchValue."%' order by id asc;";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$error = 1;
$json = "[";

while($row = mysqli_fetch_array($result)){
	$error = 0;
	$json.='{';
	$json.='"id":'.$row['id'].',';
	$json.='"productName":"'.$row['product_name'].'",';
	$json.='"casNo":"'.$row['cas_no'].'"';
	$json.='},';
			
}
			


$json.='{"error":'.$error.'}]';


echo $json;

mysqli_close($con);
?>
