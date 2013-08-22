
$('.image-grid').masonry({
  columnWidth: 200,
  itemSelector: '.grid-image'
});


$("#trigger").click(function (){
	$('#trigger').toggleClass('clicked');
	$("#container").slideToggle('slow');
	$(".network-list").delay(500).fadeToggle('slow');
});

// $('#project-excerpt').hide();	

// $(".info-open").click(function (){
// 	// $('.info-open').toggleClass('clicked');
// 	$("#project-excerpt").fadeToggle('slow');
// 	// $('.featured-image').toggleClass('clicked');
// });

