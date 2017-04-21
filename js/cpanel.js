getTableResults();
function getTableResults(){
	
	document.getElementById("main").innerHTML = fillLoader();
	var searchValue = document.getElementById("searchValue").value;
	var formData = new FormData();
	formData.append( 'searchValue',searchValue);
	var innerhtml = '<table class="centered bordered">'
					+'<thead>'
					+'<tr class="indigo-text">'
					+'<th >S.No.</th>'
					+'<th >Product Name</th>'
					+'<th >CAS No.</th>'
					+'<th ></th>'
					+'<th ></th>'
					+'</tr>'
					+'</thead>'
					+'<tbody class="black-text" >';
					
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
									document.getElementById("main").innerHTML = '<center>No Results Found</center>';
									return;
							}
							for(var i=0;i<response.length-1;i++)
							{
								innerhtml += '	<tr >'
											+'	<td>'+(i+1)+'</td>'
											+'	<td>'+response[i].productName+'</td>'
											+'	<td>'+response[i].casNo+'</td>'
											+'	<td id="del'+response[i].id+'">'
											+'		<div class="horizontal">'
											+'			<a class="btn-floating btn-small indigo" onclick="editRecord('+response[i].id+')">'
											+'				<i class="large material-icons">mode_edit</i>'
											+'			</a>'
											+'		</div>'
											+'</td>'
											+'	<td>'
											+'		<div class="horizontal">'
											+'			<a class="btn-floating btn-small red"  id="del'+response[i].id+'" onclick="deleteRecord('+response[i].id+')">'
											+'				<i class="large material-icons">delete</i>'
											+'			</a>'
											+'		</div>'
											+'</td>'
											+'	</tr>';
											
								
							}
							
							innerhtml+='</tbody></table>';
							document.getElementById("main").innerHTML = innerhtml;
						}
						});
				});
				
}








function deleteRecord(id){
	document.getElementById("del"+id).innerHTML = fillLoader();	
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
							
								//document.getElementById("deleteStatus").innerHTML='<center><font color="green">Record Deleted Successfully!!</font></center>';
								var $toastContent = $('<span>Record Deleted Successfully!!</span>');
								Materialize.toast($toastContent, 5000);
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
							if(response.error == 0){
									document.getElementById("insertStatus").innerHTML='<center><font color="green">Successfully Inserted Into Database</font></center>';
									document.getElementById("productName").value = "";
									document.getElementById("casNo").value = "";
									getTableResults();
							}
							else{
									document.getElementById("insertStatus").innerHTML='<center><font color="red">Problem in Inserting Record Into Database. Please Try Again</font></center>';
								
							}
							
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
							window.open("Login.html","_self");
						}
						});
				});
}




function fillLoader(){
	var loader = '<center>'
				  +'<div class="preloader-wrapper small active">'
			  +'<div class="spinner-layer spinner-blue">'
				+'<div class="circle-clipper left">'
				  +'<div class="circle"></div>'
				+'</div><div class="gap-patch">'
				  +'<div class="circle"></div>'
				+'</div><div class="circle-clipper right">'
				  +'<div class="circle"></div>'
				+'</div>'
			  +'</div>'

			  +'<div class="spinner-layer spinner-red">'
+'				<div class="circle-clipper left">'
				  +'<div class="circle"></div>'
				+'</div><div class="gap-patch">'
+'				  <div class="circle"></div>'
				+'</div><div class="circle-clipper right">'
+'				  <div class="circle"></div>'
				+'</div>'
			  +'</div>'

+'			  <div class="spinner-layer spinner-yellow">'
				+'<div class="circle-clipper left">'
+'				  <div class="circle"></div>'
				+'</div><div class="gap-patch">'
+'				  <div class="circle"></div>'
				+'</div><div class="circle-clipper right">'
+'				  <div class="circle"></div>'
				+'</div>'
			  +'</div>'

			  +'<div class="spinner-layer spinner-green">'
				+'<div class="circle-clipper left">'
				  +'<div class="circle"></div>'
				+'</div><div class="gap-patch">'
				+'  <div class="circle"></div>'
				+'</div><div class="circle-clipper right">'
+'				  <div class="circle"></div>'
				+'</div>'
			  +'</div>'
			+'</div>'
			+'</center>';
			
			return loader;
}