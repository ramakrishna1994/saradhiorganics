function login()
{
	document.getElementById("status").innerHTML = fillLoader();
	checkLoginParameters();
}



function checkLoginParameters()
{
				if(document.getElementById("username").value == "")
				{
					document.getElementById("username").focus();
					$('#status').html('<font color="red">Please Enter User Name</font>');
					return false;
				}
			/******* Email verification
				if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("loginemailid").value)))  
				{  
					document.getElementById("loginemailid").focus();
					$('#loginstatus').html('<font color="red">Please Enter Valid Email address</font>');
					return false;
				  
				}  
			********/

				if(document.getElementById("password").value == "")
				{
					document.getElementById("password").focus();
					$('#status').html('<font color="red">Please Enter Password</font>');
					return false;
				}

				return doLogin();


}


function doLogin()
{
				
				var username = document.getElementById('username').value;
				var password = document.getElementById('password').value;
				var formData = new FormData();
				formData.append( 'username', username);
				formData.append( 'password',password );
				$(document).ready(function(){
					
					$.ajax({
						url: "php/login.php",// give your url
						type: "POST",
						data: formData,
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							console.log(response.error);
							if(response.error == 1)
								$('#status').html('<font color="red">The username and password you entered don\'t match.</font>');
							else
							{
								$('#status').html('<font color="green">Success</font>');
								window.open("cpanel.php","_self");
							}
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
