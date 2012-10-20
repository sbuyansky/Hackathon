// JavaScript Document
var gender;
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
	//var buttonArea=document.getElementById("buttonArea");
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
		if($("#first_name").val() == "" || $("#last_name").val() == "" || $("#foo").val() == "" || $("#password2").val() == "" || $("#birthdate").val() == "")
		{
			e.preventDefault();
			alert("Make sure you entered the requried field: last name, first_name, email, password, and birthdate");	
		}
		else
		{
        	var text = JSON.stringify($("#signUp_form").serializeObject());
			var url = "signup.php";
			$.post(url,'json='+text,
				function(data){
				console.log("Data Loaded:" + data);	
			},"text");
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