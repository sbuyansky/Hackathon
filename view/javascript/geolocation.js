$(document).ready(function(e){
	var x=document.getElementById("locationInfo");
	
	$("#scanLocation").click(function(e){
		findLocation(x);
	});
	
	function findLocation(x){
		if (navigator.geolocation)
		{
		navigator.geolocation.getCurrentPosition(showPosition);
		}
		else{x.innerHTML="Geolocation is not supported by this browser.";}
	}

	function showPosition(position)
	{
		x.innerHTML="Latitude: " + position.coords.latitude + 
		"<br>Longitude: " + position.coords.longitude;	

	}
});

