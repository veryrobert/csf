



$("#trigger").click(function (){

	$('#trigger').toggleClass('clicked');
	$("#container").slideToggle('slow');
	$(".network-list").delay(500).fadeToggle('slow');
});


