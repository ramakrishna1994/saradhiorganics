<?php 
session_start();
if($_SESSION['usertoken'] != '')
	 echo '{"error":0}';
 else
	 echo '{"error":1}';
?>