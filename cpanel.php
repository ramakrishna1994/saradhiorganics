<?php?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Control Panel</title>

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
	 
      
	
      <div class="row" >
		<div class="col s12 m12  " style="padding-bottom:20px">
        <div class="input-field " >
          <i class="material-icons prefix deep-purple-text">search</i>
          <input id="searchValue" type="text" class="validate" onkeyup="getTableResults()">
          <label for="searchValue" class="deep-purple-text">Search For The Products Using Any Field Mentioned Below</label>
        
		<div id="main">
		<!--Will be filled dynamically-->
		
            </div>
	
        </div>
		    </div>
		
     
	  
	  </div> 
	  
    </div>
  
    
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large green" href="#insertModal">
      <i class="large material-icons">add</i>
    </a>
  </div>
  
<div id="footer">
	<!--footer will be filled dynamically-->	
  
</div>
  
  
  
  
  <div id="insertModal" class="modal modal-fixed-footer">
    
	<div class="modal-content">
						<div class="input-field col s12 center" id="insertStatus">
							
						</div>
						
						<div class="input-field col s12">
						  <input id="productName" type="text" class="validate black-text">
						  <label for="productName" class="black-text">Product Name</label>
						</div>
						
						<div class="input-field col s12">
						  <input id="casNo" type="text" class="validate black-text">
						  <label for="casNo" class="black-text">CAS No.</label>
						</div>
						
						<div class="input-field col s12 center-align">
							<button class="btn waves-effect waves-white green" type="submit" name="action" onclick="insertRecord()">Add Product
							  </button>
						</div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat red white-text">Close</a>
    </div>
</div>
	
	
	
	
	
	
  <div id="editModal" class="modal modal-fixed-footer">
    
	<div class="modal-content">
						<div class="input-field col s12 center" id="editStatus">
							
						</div>
						
						<div class="input-field col s12">
						  <input id="eproductName" type="text" class="validate black-text" placeholder=" ">
						  <label for="eproductName" class="black-text">Product Name</label>
						</div>
						
						<div class="input-field col s12">
						  <input id="ecasNo" type="text" class="validate black-text" placeholder=" ">
						  <label for="ecasNo" class="black-text">CAS No.</label>
						</div>
						  <input id="eid" type="hidden" >
						<div class="input-field col s12 center-align">
							<button class="btn waves-effect waves-white indigo" type="submit" name="action" onclick="updateRecord()">Update Product
							  </button>
						</div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat red white-text">Close</a>
    </div>
</div>
	
	
	
	
<div id="deleteModal" class="modal modal-fixed-footer">
    
	<div class="modal-content">
						<div class="input-field col s12 center" id="deleteStatus">
							
						</div>
	</div>
</div>

	
  <div id="searchModal" class="modal modal-fixed-footer">
    <!-- Search Modal will be filled dynamically -->
  </div>
  

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.min.js"></script>
  <script src="js/common.js"></script>
  <script src="js/cpanel.js"></script>
 
  

  </body>
</html>
