// On clicking of the 'Sign up' button:
// - Display an alert that says "We are not currently taking sign ups"
// - Then change the text of the button to say "No Sign Ups!”
$(".button").on("click", function(){
	alert("We are not currently taking signups");
	$(".button").text("No Sign Ups!");
})

// If a user clicks "Read More":
// Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Read Less”
var read;
read = "";

var addParagraph;
	addParagraph = "<p>Marshmellow cone peppermint peppermint, popsicle, cherry sorbet butterscotch, blueberry ice. Sorbet nut chocolate sorbet toppings gelato snow cones mint ice. Caramel, chocolate chip, marshmellow froyo, blueberry. Almond frozen peppermint cheesecake, shortcake sherbet popsicle peppermint. Butter vanilla mocha, chunky banana chocolate dessert peppermint orange banana butter cone white chocolate.</p>";

$(".readmore").on("click", function(){
	$(".readmore").slideDown(1200).before(addParagraph);
	$(".readmore").html("Read Less");
	$(".readmore").addClass("readLess");
	$(".readLess").removeClass("readmore");
});


$(".readLess").on("click", function(){
	$(addParagraph).html(read);
	$(".readLess").addClass("readmore");
	$(".readmore").removeClass("readLess");
	$(".readmore").html("Read Less");

// })

// If a user clicks "Read Less":
// Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Read More”
// var read;
// read = ""

// $("Read Less").on("click", function(){
// 	$
// })



// • If a user clicks “Learn More” in the sidebar:
// - Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Learn Less”
// • If a user clicks "Learn Less” in the sidebar:
// - Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Learn More”

