getTableResults();

function getTableResults(){
	document.getElementById("main").innerHTML = fillLoader();
	var searchValue = document.getElementById("searchValue").value;
	var formData = new FormData();
	formData.append( 'searchValue',searchValue);
	var innerhtml = '<table class="centered bordered">'
					+'<thead>'
					+'<tr class="white-text card indigo z-depth-5">'
					+'<th>S.No.</th>'
					+'<th>Product Name</th>'
					+'<th>CAS No.</th>'
					+'<th></th>'
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
								innerhtml += '	<tr class="card z-depth-5">'
											+'	<td>'+(i+1)+'</td>'
											+'	<td title="'+response[i].productName+' | '+response[i].casNo+'"><a target="_blank" href="product.php?id='+response[i].id+'&name='+response[i].productName+'&casno='+response[i].casNo+'">'+response[i].productName+'</a></td>'
											+'	<td>'+response[i].casNo+'</td>'
											+'	<td><a class="btn-floating btn-small waves-effect waves-light indigo"><i class="material-icons" onclick="showEnquiryFormForProduct('+response[i].id+',\''+response[i].productName+'\',\''+response[i].casNo+'\')">shopping_cart</i></a></td>'
											+'	</tr>';
											
								
							}
							
							innerhtml+='</tbody></table>';
							document.getElementById("main").innerHTML = innerhtml;
						}
						});
				});
				
}


function showEnquiryFormForProduct(id,name,casNo){
	$('#enquiryModal').modal('open');
	document.getElementById("status").innerHTML="";
	document.getElementById("productname").focus();
	document.getElementById("productname").value=name;
	document.getElementById("casno").focus();
	document.getElementById("casno").value=casNo;
	document.getElementById("qty").focus();
	document.getElementById("qty").value="";
	document.getElementById("email").value="";
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