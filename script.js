$(document).ready(function(){
	/*$('.menu-item').mouseover(function(){
		$(this).animate({paddingTop: "+=10"}, 500);
	});
	$('.menu-item').mouseout(function(){
		$(this).animate({paddingTop: "-=10"}, 500);
	});*/
	$('.mobile_menu-button_clicked').hide(0);
	$('#logo_clicked').hide(0);

	$('.mobile_menu-button').click(function(){
		$('#widgets').hide(0);
		$('#container').animate({left: "+=200px"}, 300, 'easeOutCirc');
		$('.mobile_menu-button').hide(0);
		$('.mobile_menu-button_clicked').show(0);
	});

	$('.mobile_menu-button_clicked').click(function(){
		$('#container').animate({left: "-=200px"}, 300, 'easeOutCirc');
		$('.mobile_menu-button_clicked').hide(0);
		$('.mobile_menu-button').show(0);
		$('#widgets').delay(500).show(0);
	});

	$('#logo').click(function(){
		$('#mobile_menu').hide(0);
		$('#container').animate({left: "-=200px"}, 300, 'easeOutCirc');
		$('#logo').hide(0);
		$('#logo_clicked').show(0);
	});

	$('#logo_clicked').click(function(){
		$('#container').animate({left: "+=200px"}, 300, 'easeOutCirc');
		$('#logo_clicked').hide(0);
		$('#logo').show(0);
		$('#mobile_menu').delay(500).show(0);
	});
});