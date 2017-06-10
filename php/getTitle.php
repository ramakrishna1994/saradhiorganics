<?php 

require_once '../constant/connection.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

$selectquery = "select * from chemicals_details";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$title="Supplier,buyers,sellers,traders,trading,buying,supplying,selling,but,sell,trade,supply of ";

while($row = mysqli_fetch_array($result)){
	$title.='name:'.$row['product_name'].' | casno:'.$row['cas_no'].' | ';
}

echo '{"title":"'.$title.'"}';
?>