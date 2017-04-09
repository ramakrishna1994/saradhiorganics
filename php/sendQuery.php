<?php
//echo phpinfo();
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once '../constant/connection.php';




$productname=trim(mysqli_real_escape_string($con,$_POST['productname']));
$comments=trim(mysqli_real_escape_string($con,$_POST['comments']));
$email=trim(mysqli_real_escape_string($con,$_POST['email']));
$casno=trim(mysqli_real_escape_string($con,$_POST['casno']));
$qty=trim(mysqli_real_escape_string($con,$_POST['qty']));


$to = "saradhichandrabhushanrao@gmail.com";


$mail = new PHPMailer;

//Enable SMTP debugging. 
//$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "sg2plcpnl0045.prod.sin2.secureserver.net";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "sales@saradhiorganics.com";                 
$mail->Password = "Saradhi@2";                           
//If SMTP requires TLS encryption then set it
                        
//Set TCP port to connect to 
$mail->Port = 25;                                   

$mail->From = "sales@saradhiorganics.com";
$mail->FromName = "Website Enquiry";

$mail->addAddress($to);

$mail->isHTML(true);

$mail->Subject = "Enquiry Received From Website";
$mail->Body = '
<!DOCTYPE html>
<html lang="en">
<head>
  <title>ENQUIRY RECEIVED FROM WEBSITE</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
</head>
<body>

<div class="container">
  
  <div class="panel panel-primary" style="margin-top:20px;">
      <div class="panel-heading"><center>ENQUIRY RECEIVED FROM WEBSITE</center></div>
      <div class="panel-body">
			<table class="table table-bordered">
			<tbody>
			  <tr>
				<td><b>Email Adddress</b></td>
				<td>'.$email.'</td>
			  </tr>
			  <tr>
				<td><b>Product Name</b></td>
				<td>'.$productname.'</td>
			  </tr>
			  <tr>
				<td><b>CAS No.</b></td>
				<td>'.$casno.'</td>
			  </tr>
			  <tr>
				<td><b>Quantity</b></td>
				<td>'.$qty.'</td>
			  </tr>
			  <tr>
				<td><b>Comments</b></td>
				<td>'.$comments.'</td>
			  </tr>
			</tbody>
		  </table>
	  </div>
    </div>
  
</div>

</body>
</html>

';

$i=1;

if($mail->send()) 
{
    $i = 0;
} 
echo '{"error":'.$i.'}';
?>