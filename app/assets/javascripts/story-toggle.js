$(document).ready(function(){
	$('li#tab1').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(0).attr('id','current');
		$('.connector').css('background', 'blue');
	});
	$('li#tab2').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(1).attr('id','current');
		$('.connector').css('background', 'violet');
	});
	$('li#tab3').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(2).attr('id','current');
		$('.connector').css('background', 'green');
	});
	$('li#tab4').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(3).attr('id','current');
		$('.connector').css('background', 'purple');
	});
});
