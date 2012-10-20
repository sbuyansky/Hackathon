// JavaScript Document
$(document).ready(function(e) {
   	$("#signin").click(function(e) {
		$("#signup").removeClass("active");
        $(this).addClass("active");
    });
	$("#signup").click(function(e) {
		$("#signin").removeClass("active");
        $(this).addClass("active");
    });
	$("#male").click(function(e){
		$(this).addClass("active");
		if($("#female").hasClass("active"))
		{
			$("#female").removeClass("active");	
		}
	});
	$("#female").click(function(e){
		$(this).addClass("active");
		if($("#male").hasClass("active"))
		{
			$("#male").removeClass("active");	
		}
	});
	$("a#sign2").fancybox({
		'hideOnContentClick': true,
		'autoSize': false,
		'width': 600,
		'height': 800
	});
	$("a#sign1").fancybox({
		'hideOnContentClick': true,
	});
});