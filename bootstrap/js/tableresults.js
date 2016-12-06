getTableResults();
var colors = ["danger","info","warning","default","success","active"];
function getTableResults(){
	document.getElementById("main").innerHTML = fillLoader();
	var searchValue = document.getElementById("searchValue").value;
	var formData = new FormData();
	formData.append( 'searchValue',searchValue);
	var innerhtml = '<table class="table table-bordered table-responsive" style="text-align:center">'
					+'<thead>'
					+'<tr>'
					+'<th><center>S.No.</center></th>'
					+'<th><center>Product Name</center></th>'
					+'<th><center>CAS No.</center></th>'
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
									document.getElementById("main").innerHTML = '<center><font size="4px" color="red">No Results Found !!</font></center>';
									return;
							}
							for(var i=0;i<response.length-1;i++)
							{
								innerhtml += '	<tr class="'+colors[i%6]+'">'
											+'	<td>'+(i+1)+'</td>'
											+'	<td>'+response[i].productName+'</td>'
											+'	<td>'+response[i].casNo+'</td>'
											+'	</tr>';
											
								
							}
							
							innerhtml+='</tbody></table>';
							document.getElementById("main").innerHTML = innerhtml;
						}
						});
				});
				
}






function fillLoader(){
	var loader = '<center><image src="images/loader.gif" height="70px" width="70px"></center>';
	return loader;
}
