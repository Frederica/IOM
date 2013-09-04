// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function(){

	$('li#tab1').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(0).attr('id','current');
		$('.connector').css('background', '#613318');
	});
	$('li#tab2').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(1).attr('id','current');
		$('.connector').css('background', '#B99C6B');
	});
	$('li#tab3').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(2).attr('id','current');
		$('.connector').css('background', '#4E6172');
	});
	$('li#tab4').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(3).attr('id','current');
		$('.connector').css('background', '#D57500');
	});
	$('li#tab5').click(function (){
		$('.tab-content').removeAttr('id')
		$('.tab-content').eq(4).attr('id','current');
		$('.connector').css('background', '#8F3B1B');
	});
	
});
