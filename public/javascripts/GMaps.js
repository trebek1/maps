window.onload = function(){
	(function initMap() {
  		var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 8,
    	center: {lat: -34.397, lng: 150.644}
  	});
  	
  	var geocoder = new google.maps.Geocoder();
  	document.getElementById('gform').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

var markers = [];
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('gplace').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
 	
 	// get bounds and set new bounds to map    
    
	markers.push(marker);
	var bounds = new google.maps.LatLngBounds();
	for(i=0;i<markers.length;i++) {
 		bounds.extend(markers[i].getPosition());
 		map.setCenter(bounds.getCenter());
 		
 		google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
  		map.setZoom(map.getZoom());

  		if (this.getZoom() > 15) {
    		this.setZoom(15);
  		}
		});

 		map.fitBounds(bounds);
 
	}
	

    } 
  });
}




})(); 

}



function gsubmit(event){
	event.preventDefault();

	var query = document.getElementById('gplace').value; 

	console.log("this is query ", query); 
	
	document.getElementById('gplace').value = '';  

	
}



