$(document).ready(function(e){
	
	$('body').on('[data-toggle="scanLocation"]', function ( e ){
		findLocation();
	});
});

function findLocation(){
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latLng = new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude);
    var marker = new google.maps.Marker({position: latLng, map: map});
    map.setCenter(latLng);
	}, errorHandler);
  }
})