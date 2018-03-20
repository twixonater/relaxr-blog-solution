// On clicking of the 'Sign up' button:
// - Display an alert that says "We are not currently taking sign ups"
// - Then change the text of the button to say "No Sign Ups!”
$(".button").on("click", function(){
	alert("We are not currently taking signups");
	$(".button").text("No Sign Ups!");
})

// If a user clicks "Read More":
// Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Read Less”
// If a user clicks "Read Less":
// Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Read More”

var read=true;

$(".blog1").on("click", function(){
	if (read) {
		$(".par1").slideDown(1200);
		$(".blog1").text("Read Less");
		read=false;
	} 
	else { 
		$(".par1").slideUp(1200);
		$(".blog1").text("Read More");
		read=true;
	}
});

$(".blog2").on("click", function(){
	if (read=true) {
		$(".par2").slideDown(1200);
		$(".readmore .blog2").text("Read Less");
		read=false;
	} else { 
		$(".par2").slideUp(1200);
		$(".readmore .blog2").text("Read More");
		read=true;
	}
});


// • If a user clicks “Learn More” in the sidebar:
// - Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Learn Less”
// • If a user clicks "Learn Less” in the sidebar:
// - Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Learn More”

$(".learnmore").on("click", function(){
	if (read=true) {
		$(".par3").slideDown(1200);
		$(".learnmore").text("Learn Less");
		read=false;
	} else { 
		$(".par3").slideUp(1200);
		$(".learnmore").text("Learn More");
		read=true;
	}
});