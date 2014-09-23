$(document).ready(function(){
	/*$('.menu-item').mouseover(function(){
		$(this).animate({paddingTop: "+=10"}, 500);
	});
	$('.menu-item').mouseout(function(){
		$(this).animate({paddingTop: "-=10"}, 500);
	});*/
	$('.mobile_menu-button_clicked').hide(0);

	$('.mobile_menu-button').click(function(){
		$('#container').animate({left: "+=200px"}, 300, 'easeOutCirc');
		$('.mobile_menu-button').hide(0);
		$('.mobile_menu-button_clicked').show(0);
	});

	$('.mobile_menu-button_clicked').click(function(){
		$('#container').animate({left: "-=200px"}, 300, 'easeOutCirc');
		$('.mobile_menu-button_clicked').hide(0);
		$('.mobile_menu-button').show(0);
	});
});