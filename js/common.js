(function($){
  $(function(){
	$('#header').load('../header.html',function(){
			$('.button-collapse').sideNav();
	 })
	 $('#footer').load('../footer.html')
	 $('#searchModal').load('../searchmodal.html',function(){
			$('.modal').modal();
	})
	 $('.carousel.carousel-slider').carousel({fullWidth: true});
  }); // end of document ready
})(jQuery); // end of jQuery name space

function triggerSearch(){
	
	$('#searchModal').modal('open',function(){
			
	})
	getSearchResults();
}

function getSearchResults(){
	document.getElementById("searchdiv").innerHTML = fillLoader();
	var searchValue = document.getElementById("search").value;
	var formData = new FormData();
	formData.append( 'searchValue',searchValue);
	var innerhtml = '<table class="centered bordered">'
					+'<thead>'
					+'<tr class="purple-text">'
					+'<th data-field="name">Product Name</th>'
					+'<th data-field="price">CAS No.</th>'
					+'</tr>'
					+'</thead>'
					+'<tbody class="black-text">';
					
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
									document.getElementById("searchdiv").innerHTML = '<center>No Results Found</center>';
									return;
							}
							for(var i=0;i<response.length-1;i++)
							{
								innerhtml += '	<tr >'
											+'	<td><a target="_blank" href="product.php?id='+response[i].id+'&name='+response[i].productName+'&casno='+response[i].casNo+'">'+response[i].productName+'</a></td>'
											+'	<td>'+response[i].casNo+'</td>'
											+'	</tr>';
											
								
							}
							
							innerhtml+='</tbody></table>';
							document.getElementById("searchdiv").innerHTML = innerhtml;
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