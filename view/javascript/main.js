// JavaScript Document
var gender;
var interest_category = new Array();
var sport_rec = new Array("Basketball", "Baseball", "Cheerleading",
	 "Boxing", "Martial_Arts", "Wrestling", "Cricket", "Extreme_Sports",
	 "Football", "Golf", "Gymnastics", "Hockey", "Horse_&_Dog_Racing",
	 "Motor_Sports", "Olympics_&_International_Competition", "Racquet_Sports",
	 "Rugby", "Soccer", "Sporting_Goods", "Sports_Magazines", "Track_and_Field",
	 "Volleyball", "Water_Sports", "Winter_Sports");
var movie_tv = new Array("Action", "Adventure", "Animated", "Comedy",
	"Crime", "Documentary", "Drama", "Family", "Fantasy", "Horror", 
	"Martial_Arts", "Musical", "Mystery", "Romance", "Sci-Fi", "Sports", 
	"Thriller", "Western");
var graphi_novel = new Array("Action/Adventure", "Children's", "Crime",
	"Fantasy", "General_Fication", "Graphic_Novels", "Historical_Fiction",
	"Horror", "Humor", "Military/Espionage", "Mystery", "Religious",
	"Romance", "Sci-Fi", "Short_Story", "Western", "Young_Adult",
	"Art/Photography", "Biography/Memoirs", "Cookbooks", "Cultural/Social_Issues",
	"Current Affairs/Politics", "Food_and_Lifestyle", "Gardening", "History",
	"Journalism", "Nature", "Psychology", "Reference", "Science_&_Tech", 
	"Self-Help", "Sports");
var animals = new Array("Aquatic_Pets", "Birds", "Cats", "Dogs", 
	"Fish", "Livestock_Animals", "Mammals", "Reptile_Pets", "Rodent_Pets",
	"Wildlife_Animals");
var art = new Array("Visual_Arts", "Theatre_&_Performing_Arts",
	"Abstract_Art", "Representational_Art", "Figure_Drawing",
	"History_Painting", "Portait_Art", "Genre_Painting", "Lanscape_Painting",
	"Still_Life_Painting");
var food_drink = new Array("Chinese", "Japanese", "Korean", "Indian",
	"Indian", "Intalian", "Frech_Cuisine", " Abrabic_Cuisine", "Mexican_Food");
var music = new Array("Alternative", "Anime", "Blues", "Children's",
	"Classical", "Country", "Easy_Listening", "Electronic", "Pop",
	"Hip-Hop/Rap", "Instrumental", "Christian/Gospel", "Jazz", "Latino",
	"New_Age", "Opera", "R&B/Soul", "Reggae", "Rock", "Folk", "Soundtrack",
	"World/Ethnic");
		


	var food_drink = new Array("Chinese", "Japanese", "Korean", "Indian",
	"Indian", "Intalian", "Frech_Cuisine", " Abrabic_Cuisine", "Mexican_Food");
	
	var music = new Array("Alternative", "Anime", "Blues", "Children's",
	"Classical", "Country", "Easy_Listening", "Electronic", "Pop",
	"Hip-Hop/Rap", "Instrumental", "Christian/Gospel", "Jazz", "Latino",
	"New_Age", "Opera", "R&B/Soul", "Reggae", "Rock", "Folk", "Soundtrack",
	"World/Ethnic");
function generateButtons(){
	for(var i=0; i<interest_category.length;i++){
		var interest_group = interest_category[i];
		if(interest_group == null){
			return;
		}
		for(var j=0; j<interest_group.length; j++){
			insertElement(interest_group[j]);
		}
	}
}
	
function insertElement(label) {
	 var text = label;
	 var newElement = document.createElement("BUTTON");
	 newElement.value = label;
	 newElement.setAttribute("class", "autoGenButton");
	 var newText = document.createTextNode(text);
	 newElement.appendChild(newText);
	 buttonArea.appendChild(newElement);
}

function deleteElement() {
	 while(buttonArea.hasChildNodes()) {
		  var children = buttonArea.childNodes;
		  var n = children.length - 1;
		  var lastChild = children.item(n);
		  buttonArea.removeChild(lastChild);
	 }
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
			alert(text);
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
//$("#sport_rec").click(function(e){
//	interest_category.push(sport_rec);
//	generateButtons();
//});
//$("#clear_interest_buttons").click(function(e){
//	interest_category = [];
//	deleteElement();
//});
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