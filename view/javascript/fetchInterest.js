$(document).ready(function(e){
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
	
	var graphic_novel = new Array("Action/Adventure", "Children's", "Crime",
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
	
	var x=document.getElementById("interestDropBox");
	var buttonArea=document.getElementById("buttonArea");
	
	$("#sport_rec").click(function(e){
		document.getElementById("sport_rec").setAttribute("id", "sport_rec0" );
		interest_category.push(sport_rec);
		generateButtons();
	});
	$("#movie_tv").click(function(e){
		document.getElementById("movie_tv").setAttribute("id", "movie_tv0");
		interest_category.push(movie_tv);
		generateButtons();
	});
	$("#animals").click(function(e){
		document.getElementById("animals").setAttribute("id", "animals0");
		interest_category.push(animals);
		generateButtons();
	});
	$("#art").click(function(e){
		document.getElementById("art").setAttribute("id", "art0");
		interest_category.push(art);
		generateButtons();
	});
	$("#food_drink").click(function(e){
		document.getElementById("food_drink").setAttribute("id", "food_drink0");
		interest_category.push(food_drink);
		generateButtons();
	});
	$("#music").click(function(e){
		document.getElementById("music").setAttribute("id", "music0");
		interest_category.push(music);
		generateButtons();
	});
	$("#clear_interest_buttons").click(function(e){
		interest_category = [];
		deleteElement();
		document.getElementById("sport_rec0").setAttribute("id", "sport_rec");
		document.getElementById("movie_tv0").setAttribute("id", "movie_tv");
		document.getElementById("animals0").setAttribute("id", "animals");
		document.getElementById("art0").setAttribute("id", "art");
		document.getElementById("food_drink0").setAttribute("id", "food_drink");
		document.getElementById("music0").setAttribute("id", "music");
		
	});
	$(".autoGenButton").click(function(e){
		alert(e);
	});
	
	
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
});