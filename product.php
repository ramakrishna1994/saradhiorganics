<?php

require_once 'constant/connection.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

$id=trim(mysqli_real_escape_string($con,$_GET['id']));
		
$selectquery = "select * from chemicals_details where id= ".$id.";";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$name="";
$casno="";
while($row = mysqli_fetch_array($result)){
	$name=$row['product_name'];
	$casno=$row['cas_no'];
			
}

?>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Name : <?php echo $name ?> | CAS No. : <?php echo $casno ?> | Saradhi Organics</title>

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.min.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
  <link href="css/common.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  
</head>
<body>
<div  id="header">		
		<!--Header will be filled dynamically-->
  
</div>
  
  <div class="container-fluid" style="margin-top:20px;margin-left:20px;margin-right:20px;">
	<div class="row ">
		<div class="col card s12 m6 z-depth-5">
			<table>
				<tr><td class="right-align"><b>Product Name : </b></td><td ><?php echo $name ?></td></tr>
				<tr><td class="right-align"><b>CAS No. : </b></td><td ><?php echo $casno ?></td></tr>
			</table>
		</div>
		<div class="col card s12 m5 z-depth-5" style="margin-left:10px">
			<div class="input-field col s12 center " id="status">
				  <!-- status will be filled dynamically-->
			</div>
			<div class="input-field col s12">
			  <input id="email" type="text" class="black-text">
			  <label for="email" class="indigo-text">Email Address : </label>
			</div>
			<div class="input-field col s12 ">
			  <input id="productname" type="text" class="black-text" value="<?php echo $name ?>">
			  <label for="productname" class="indigo-text" >Product Name :</label>
			</div>
			<div class="input-field col s12">
			  <input id="casno" type="text" class="black-text" value="<?php echo $casno ?>">
			  <label for="casno" class="indigo-text" >CAS No. :</label>
			</div>
			<div class="input-field col s12">
			  <input id="qty" type="text" class="black-text">
			  <label for="qty" class="indigo-text" >Quantity. :</label>
			</div>
			<input type="hidden" id="comments">
			<div class="col s12 center">
			  <a class="waves-effect waves-light btn indigo" onclick="sendQuery()"><i class="material-icons left">send</i>Submit</a>
			</div>
			&nbsp;
		</div>
	</div>
  </div>
  
    
  
<div id="footer">
	<!--footer will be filled dynamically-->	
  
</div>
  
  
		 
  <div id="searchModal" class="modal modal-fixed-footer">
    <!-- Search Modal will be filled dynamically -->
  </div>
  

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.min.js"></script>
  <script src="js/common.js"></script>
  <script src="js/enquiry.js"></script>
 
  

  </body>
</html>
