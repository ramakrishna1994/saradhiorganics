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