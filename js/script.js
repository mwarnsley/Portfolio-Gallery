$(document).ready(function(){

	$("nav").on("click", "a", function(){
		// assign the current class
		$("nav li.current").removeClass("current");
		$(this).parent().addClass("current");

	// set the heading text
	$("h1#heading").text($(this).text());

	// Get & filter link text
	var category = $(this).text().toLowerCase().replace(' ','-');

	//remove hidden class if all-projects is selected
	if(category === 'all-projects'){
		$("ul#gallery li:hidden").fadeIn("slow").removeClass("hidden");
	}else{
		$("ul#gallery li").each(function(){
			if(!$(this).hasClass(category)){
				$(this).hide().addClass("hidden");
			}else{
				$(this).fadeIn('slow').removeClass('hidden');
			}
		})
	}

	// stopping the link behavior
	return false;

	});


	// Mouse Enter Event for overlay
	$("ul#gallery").on("mouseenter", "li", function(){
		// get data attribute values
		var title = $(this).children().data("title");
		var desc = $(this).children().data("desc");

		// Validation for missing title or desc
		if(desc === null){
			desc == "Click To Enlarge";
		}

		if(title === null){
			title == "";
		}

		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		// Get overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3>'+title+'<p>'+desc+'</p></h3>');

		//Fade in the overlay
		overlay.fadeIn(800);
	});

	// Mouse Leave Event for overlay
	$("ul#gallery").on("mouseleave", "li", function(){

		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		// Get overlay div
		var overlay = $(this).children('.overlay');

		//Fade in the overlay
		overlay.fadeOut(800);
	});

});