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


});