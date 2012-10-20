// JavaScript Document
var gender;
function createXMLRequest()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	return xmlhttp;
}
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push($.trim(this.value) || '');
        } else {
            o[this.name] = $.trim(this.value) || '';
        }
    });
	if(gender != null)
	{
		o["gender"] = gender;
	}
	return o;
};
$(document).ready(function(e) {
   	$("#signin").click(function(e) {
		$("#signup").removeClass("active");
        $(this).addClass("active");
    });
	$("#signup").click(function(e) {
		$("#signin").removeClass("active");
        $(this).addClass("active");
    });
	$("#signin").mouseleave(function(e){
			$(this).removeClass("active");
	});
	$("#signup").mouseleave(function(e) {
        $(this).removeClass("active");
    });
	$("#male").click(function(e){
		$(this).addClass("active");
		if($("#female").hasClass("active"))
		{
			$("#female").removeClass("active");	
		}
		gender = $(this).val();
		e.preventDefault();
	});
	$("#female").click(function(e){
		$(this).addClass("active");
		if($("#male").hasClass("active"))
		{
			$("#male").removeClass("active");	
		}
		gender = $(this).val();
		e.preventDefault();
	});
	$("#Continue").click(function(e) {
		if($("#first_name").val() == "" || $("#last_name").val() == "" || $("#foo").val() == "" || $("#password").val() == "" || $("#birthdate").val() == "")
		{
			e.preventDefault();
			alert("Make sure you entered the requried field: last name, first_name, email, password, and birthdate");	
		}
		else
		{
			
        	var text = JSON.stringify($("#signUp_form").serializeObject());
			var url = "signup.php";
			$.ajax({
  				type: 'POST',
  				url: url,
  				data: text,
  				success: success,
  				dataType: json
			}, function(data){
				alert("Data Loaded" + data);	
			});
		}
	});
	$("a#sign2").fancybox({
		'hideOnContentClick': true,
		'closeBtn': false,
		'beforeClose' : function() {
        	return window.confirm('Are you sure you want to close?');
		}
	});
	$("a#sign1").fancybox({
		'hideOnContentClick': true,
		'beforeClose' : function() {
        return window.confirm('Are you sure you want to close?');
		}
	});
});