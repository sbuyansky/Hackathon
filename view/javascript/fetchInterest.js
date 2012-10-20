$(document).ready(function(e){
	var selected_interest = new Array();
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
	
	var books_magazines = new Array("Action/Adventure", "Children's", "Crime",
	"Fantasy", "General_Fication", "Graphic_Novels", "Historical_Fiction",
	"Horror", "Humor", "Military/Espionage", "Mystery", "Religious",
	"Romance", "Short_Story", "Western", "Young_Adult",
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
		var h = new Object();
		document.getElementById("sport_rec").setAttribute("id", "sport_rec0" );
		h["Sport_&_Recreation"] = sport_rec;
		interest_category.push(h);
		generateButtons();
	});
	$("#movie_tv").click(function(e){
		document.getElementById("movie_tv").setAttribute("id", "movie_tv0");
		var h = new Object();
		h["Movies/TV"] = movie_tv;
		interest_category.push(h);
		generateButtons();
	});
	$("#books_magazines").click(function(e){
		document.getElementById("books_magazines").setAttribute("id", "books_magazines0");
		var h = new Object();
		h["Books/Magazines"] = books_magazines;
		interest_category.push(h);
		generateButtons();
	});
	$("#animals").click(function(e){
		document.getElementById("animals").setAttribute("id", "animals0");
		var h = new Object();
		h["Animals"] = animals;
		interest_category.push(h);
		generateButtons();
	});
	$("#art").click(function(e){
		document.getElementById("art").setAttribute("id", "art0");
		var h = new Object();
		h["Art"] = art;
		interest_category.push(h);
		generateButtons();
	});
	$("#food_drink").click(function(e){
		document.getElementById("food_drink").setAttribute("id", "food_drink0");
		var h = new Object();
		h["Food/Drink"] = food_drink;
		interest_category.push(h);
		generateButtons();
	});
	$("#music").click(function(e){
		document.getElementById("music").setAttribute("id", "music0");
		var h = new Object();
		h["Music"] = music;
		interest_category.push(h);
		generateButtons();
	});
	$("#clear_interest_buttons").click(function(e){
		interest_category = [];
		selected_interest = [];
		deleteElement();
		resetIDBack();
	});
	$("#submit_interest").click(function(e){
		var results_hash = new Object();
		var keys = [];
		console.log(selected_interest);
		for(var key in selected_interest)
		{
			if(selected_interest.hasOwnProperty(key))
			{
				for(var i in selected_interest[key])
				{
					keys.push(i);
				}
			}
		}
		keys.sort();
		var uniqueKey = keys.filter(function(elem, pos) {
    		return keys.indexOf(elem) == pos;
		});
		for(var sorted_item in uniqueKey)
		{
			var array = [];
			for(var j in selected_interest)
			{
						for (var firstKey in selected_interest[j]) break;
						if(uniqueKey[sorted_item] == firstKey)
						{
								var current = selected_interest[j];
								console.log(current[uniqueKey[sorted_item]]);
								array.push(current[uniqueKey[sorted_item]]);
								results_hash[uniqueKey[sorted_item]] = array;
						}
			}
		}
		var json = JSON.stringify(results_hash);
		var url = "php/addInterest.php";
			$.post(url,'json='+text,
				function(data){
				console.log("Data Loaded:" + data);	
		},"text");
	});
	$(document).on("click",".autoGenButton", function(e){
		var temp_interest = e.target;
		var h = new Object();
		h[temp_interest.getAttribute("category")] = temp_interest.value;
		selected_interest.push(h);
		temp_interest.setAttribute("class", "btn btn-danger");
	});
	
	
	function resetIDBack(){
		document.getElementById("sport_rec0").setAttribute("id", "sport_rec");
		document.getElementById("movie_tv0").setAttribute("id", "movie_tv");
		document.getElementById("books_magazines0").setAttribute("id", "books_magazines")
		document.getElementById("animals0").setAttribute("id", "animals");
		document.getElementById("art0").setAttribute("id", "art");
		document.getElementById("food_drink0").setAttribute("id", "food_drink");
		document.getElementById("music0").setAttribute("id", "music");
	}
	function generateButtons(){
		for(var i=0; i<interest_category.length;i++){
			var hash = interest_category[i];
			for(var k in hash){
				var interest_group = hash[k];
				if(interest_group == null){
					return;
				}
				for(var j=0; j<interest_group.length; j++){
					insertElement(k, interest_group[j]);
				}
			}
			
		}
	}
	
	function insertElement(k, label) {
	 var text = label;
	 var newElement = document.createElement("BUTTON");
	 newElement.value = label;
	 newElement.setAttribute("class", "autoGenButton");
	 newElement.setAttribute("category", k);
	 
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
