$(document).ready(function(){
	$('.menu-item').mouseover(function(){
		$(this).animate({marginTop: "-=10"}, 500);
	});
	$('.menu-item').mouseout(function(){
		$(this).animate({marginTop: "+=10"}, 500);
	});
});