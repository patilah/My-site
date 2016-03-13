(function($){

	var navbar,
		navbar_header,
        navbar_right,
        navbar_accordian,
		about_section,
		technical_section,
		career_section,
		hobbies_section,
		contact_section,
		go_to_top,
		fixed_custom_navbar_class = "navbar-fixed-custom",
		hide_class = "hide",
		go_to_top_data = "go-to-top",
		introduction_header,
        isAccordianDisplayed = false,
        all_sections;

	function setUp(){
		cacheDOMElements()
		defineEvents();
	}

	function cacheDOMElements(){
		navbar = $(".navbar");
		navbar_header = navbar.find(".navbar-header");
        navbar_right = navbar.find(".navbar-right");
        navbar_accordian = navbar.find(".navbar-accordian");
		about_section = $("#about");
		technical_section = $("#technical");
		career_section = $("#career");
		hobbies_section = $("#hobbies");
		contact_section = $("#contact");
		go_to_top = $("#go-to-top");
        all_sections = $("section");
        introduction_header = $("#introduction");
	}

	function defineAutoSrollFeature(){
		$('a.page-scroll').bind('click', function(event) {
			var $target_ele = $(event.target);
        	scroll_to_target_section(this);
        	event.preventDefault();
            if(isAccordianDisplayed){
                isAccordianDisplayed = !isAccordianDisplayed;
                navbar_right.toggleClass("block");
                if(navbar_header.hasClass(hide_class)){
                	navbar.removeClass(fixed_custom_navbar_class);
                }
            }
    	});
	}

	function collapseNavbar(){
        if(isAccordianDisplayed){
            checkForAccordianVisibility(undefined);
        }
		if(navbar.offset().top > 50 ){
			navbar.addClass(fixed_custom_navbar_class);
			navbar_header.removeClass(hide_class);
			go_to_top.removeClass(hide_class);
		}else{
			navbar.removeClass(fixed_custom_navbar_class);
            navbar_header.addClass(hide_class);
			go_to_top.addClass(hide_class);
		}
	}

	function scroll_to_target_section(event_target){
		var $anchor = $(event_target);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
	}
    
    function checkForAccordianVisibility(event){
        isAccordianDisplayed = !isAccordianDisplayed;
        navbar_right.toggleClass("block");
        if(navbar_header.hasClass(hide_class)){
            if(isAccordianDisplayed){
                navbar.addClass(fixed_custom_navbar_class);
            }else{
                navbar.removeClass(fixed_custom_navbar_class);
            }
        }
        if(event){
            event.preventDefault();
        }
    }
    
    
    function defineAccordianBehaviour(){
        navbar_accordian.bind('click', function(event) {
			checkForAccordianVisibility(event);
    	});  
        introduction_header.bind('click', function(event) {
            if(isAccordianDisplayed){
                checkForAccordianVisibility(event);
            }
    	});   
        all_sections.bind('click', function(event) {
            if(isAccordianDisplayed){
                checkForAccordianVisibility(event);
            }
    	});
    }
	
	function defineEvents(){
		$(window).scroll(collapseNavbar);
		defineAutoSrollFeature();
        defineAccordianBehaviour();
	}

	$(setUp);
	$(document).ready(collapseNavbar);

})(jQuery);