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
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});
});