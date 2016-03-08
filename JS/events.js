(function($){

	var navbar,
		navbar_header,
		about_section,
		technical_section,
		career_section,
		hobbies_section,
		contact_section,
		go_to_top,
		fixed_custom_navbar_class = "navbar-fixed-custom",
		hide_class = "hide",
		go_to_top_data = "go-to-top",
		introduction_data = "introduction";

	function setUp(){
		cacheDOMElements()
		defineEvents();
	}

	function cacheDOMElements(){
		navbar = $(".navbar");
		navbar_header = navbar.find(".navbar-header");
		about_section = $("#about");
		technical_section = $("#technical");
		career_section = $("#career");
		hobbies_section = $("#hobbies");
		contact_section = $("#contact");
		go_to_top = $("#go-to-top");
	}

	function defineAutoSrollFeature(){
		$('a.page-scroll').bind('click', function(event) {
			var $target_ele = $(event.target);
        	scroll_to_target_section(this);
        	event.preventDefault();
    	});
	}

	function collapseNavbar(){
		if(navbar.offset().top > 50 ){
			navbar.addClass(fixed_custom_navbar_class);
			navbar_header.html("<i class='fa fa-user'></i>Abhijeet Patil");
			go_to_top.removeClass(hide_class);
		}else{
			navbar.removeClass(fixed_custom_navbar_class);
            navbar_header.html("");
			go_to_top.addClass(hide_class);
		}
	}

	function scroll_to_target_section(event_target){
		var $anchor = $(event_target);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
	}
	
	function defineEvents(){
		$(window).scroll(collapseNavbar);
		defineAutoSrollFeature();
	}

	$(setUp);
	$(document).ready(collapseNavbar);

})(jQuery);