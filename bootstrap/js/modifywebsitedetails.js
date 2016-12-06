

 
getTableResults();
var colors = ["danger","info","warning","default","success","active"];
function getTableResults(){
	
	var searchValue = document.getElementById("searchValue").value;
	var formData = new FormData();
	document.getElementById("main").innerHTML = fillLoader();
	formData.append( 'searchValue',searchValue);
	var innerhtml = ''
					+'<table class="table table-bordered table-responsive" style="text-align:center">'
					+'<thead>'
					+'<tr>'
					+'<th ><center>S.No</center></th>'
					+'<th ><center>Product Name</center></th>'
					+'<th ><center>CAS NO</center></th>'
					+'<th ></th>'
					+'</tr>'
					+'</thead>'
					+'<tbody>';
					
	$(document).ready(function(){
					
					$.ajax({
						url: "php/tableResults.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							
							
							
							
							if(response[response.length-1].error == 1)
							{
									document.getElementById("main").innerHTML = '<center><font color="red">No Results Found</font></center>';
									return;
							}
							for(var i=0;i<response.length-1;i++)
							{
								innerhtml += '	<tr class="'+colors[i%6]+'">'
											+'	<td>'+(i+1)+'</td>'
											+'	<td>'+response[i].productName+'</td>'
											+'	<td>'+response[i].casNo+'</td>'
											+'	<td><button class="btn btn-danger" '
											+'	onclick="deleteRecord('+response[i].id+')">Delete'
											+'	</button></td>'
											+'	</tr>';
											
								
							}
							
							innerhtml+='</tbody></table>';
							document.getElementById("main").innerHTML = innerhtml;
						}
						});
				});
				
}






function fillLoader(){
	var loader = '<center><image src="images/loader.gif" height="40px" width="40px"></center>';
	return loader;
}


function deleteRecord(id){
	document.getElementById("deleteStatus").innerHTML = fillLoader();	
	var formData = new FormData();
	formData.append( 'id',id);
	$(document).ready(function(){
					
					$.ajax({
						url: "php/deleteRecord.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							
							document.getElementById("deleteStatus").innerHTML='<center><font color="green">Record Deleted Successfully!!</font></center>';
							getTableResults();
						}
						});
				});
}


function insertRecord(){
	var formData = new FormData();
	var productName = document.getElementById("productName").value;
	var casNo = document.getElementById("casNo").value;
	document.getElementById("insertStatus").innerHTML=fillLoader();
	if(productName == ""){
		document.getElementById("insertStatus").innerHTML='<center><font color="red">Please Enter Product Name</font></center>';
		return;
	}
	if(casNo == ""){
		document.getElementById("insertStatus").innerHTML='<center><font color="red">Please Enter CAS No</font></center>';
		return;	
	}
	formData.append( 'productName',productName);
	formData.append('casNo',casNo);
	$(document).ready(function(){
					
					$.ajax({
						url: "php/insertRecord.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							document.getElementById("insertStatus").innerHTML='<center><font color="green">Successfully Inserted Into Database</font></center>';
							document.getElementById("productName").value = "";
							document.getElementById("casNo").value = "";
						}
						});
				});
}


function logout(){
	$(document).ready(function(){
					
					$.ajax({
						url: "php/logout.php",// give your url
						processData: false,
						contentType: false,
						success: function (response) 
						{
							window.open("login.html","_self");
						}
						});
				});
}

