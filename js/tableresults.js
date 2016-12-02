getTableResults();

function getTableResults(){
	
	var searchValue = document.getElementById("searchValue").value;
	var formData = new FormData();
	formData.append( 'searchValue',searchValue);
	var innerhtml = '<span >'
					+'<table class="centered striped">'
					+'<thead>'
					+'<tr>'
					+'<th data-field="id">S.No</th>'
					+'<th data-field="id">Catalogue No</th>'
					+'<th data-field="name">Product Name</th>'
					+'<th data-field="price">CAS NO</th>'
					+'<th data-field="price">Application</th>'
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
							
							fillLoader();
							
							
							if(response[response.length-1].error == 1)
							{
									document.getElementById("main").innerHTML = '<center>No Results Found</center>';
									return;
							}
							for(var i=0;i<response.length-1;i++)
							{
								innerhtml += '	<tr>'
											+'	<td>'+(i+1)+'</td>'
											+'	<td>'+response[i].catalogueNo+'</td>'
											+'	<td>'+response[i].productName+'</td>'
											+'	<td>'+response[i].casNo+'</td>'
											+'	<td>'+response[i].application+'</td>'
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
}