$(document).ready(function() {
	$('.video-poster, .video-wrap span').click(function() {
	    $('.video-wrap').toggleClass('active');
	    
	});
	
	$('.video-wrap span').click(function() {
	    iframe.src = iframe.src;
	});

	
	 $('.reservate-on').click(function(e) {
	 	e.preventDefault();
	 	$('.section-float').removeClass('active');
	    $('.reservation').addClass('active');
	    $('body').addClass('section-open');
	    $('.navbar-collapse').collapse('hide');
	});
	
	 $('.about-on').click(function(e) {
	 	e.preventDefault();
	 	$('.section-float').removeClass('active');
	    $('.about').addClass('active');
	    $('body').addClass('section-open');
	    $('.navbar-collapse').collapse('hide');
	});
	
	$('.contact-on').click(function(e) {
	 	e.preventDefault();
	 	$('.section-float').removeClass('active');
	    $('.contact').addClass('active');
	    $('body').addClass('section-open');
	    $('.navbar-collapse').collapse('hide');
	    setTimeout(function() {
			$('#map').gmap3({
						marker:{
						    latLng: [9.932048, -84.069813],
							options:{
						          icon: "img/logo-icon.png"
						        }
						  },
						  map:{
						    options:{
						      zoom: 15
						    }
						  }
					});			
			}, 600);
	    
	});
	
	$('.close-section').click(function(e) {
		e.preventDefault();
	    $('.section-float').removeClass('active');
	    $('body').removeClass('section-open');
	});
	
	var iframe = document.getElementById('youtubeframe');
	
	
});



$(window).load(function() {
    $("body").addClass('loaded');
    
    
    
});

