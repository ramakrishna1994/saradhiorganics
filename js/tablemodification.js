

 
getTableResults();

function getTableResults(){
	
	var searchValue = document.getElementById("searchValue").value;
	var formData = new FormData();
	document.getElementById("main").innerHTML = fillLoader();
	formData.append( 'searchValue',searchValue);
	var innerhtml = '<span >'
					+'<table class="centered striped">'
					+'<thead>'
					+'<tr>'
					+'<th data-field="id">S.No</th>'
					+'<th data-field="name">Product Name</th>'
					+'<th data-field="price">CAS NO</th>'
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
								innerhtml += '	<tr>'
											+'	<td>'+(i+1)+'</td>'
											+'	<td>'+response[i].productName+'</td>'
											+'	<td>'+response[i].casNo+'</td>'
											+'	<td><button data-target="deleteModal" class="btn modal-trigger" '
											+'	onclick="deleteRecord('+response[i].id+')">Delete'
											+'	<i class="material-icons right">close</i>'
											+'	</button></td>'
											+'	</tr>';
											
								
							}
							
							innerhtml+='</tbody></table></span>';
							document.getElementById("main").innerHTML = innerhtml;
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


function deleteRecord(id){
	document.getElementById("deleteStatus").innerHTML='<div class="progress">'
          												+'	<div class="indeterminate"></div>'
        											+'</div>';	
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


$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

