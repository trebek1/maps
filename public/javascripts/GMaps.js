window.onload = function(){
	(function initMap() {
  		var markers = [];
		var geocoder = new google.maps.Geocoder();
  		
  		var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 12,
    	center: {lat: 37.7749300, lng: -122.4194200}
  	});
  	
  	
  	document.getElementById('gform').addEventListener('submit', function(event) {
  		event.preventDefault();
    	geocodeAddress(geocoder, map);
    	document.getElementById('gplace').value = '';  
  	});

	
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

		 		// fitBounds() is a asynchronous and it is best to make Zoom manipulation with a listener defined before calling Fit Bounds
		 		// google maps events 
		 	// 	bounds_changed
				// center_changed
				// click
				// dblclick
				// drag
				// dragend
				// dragstart
				// heading_changed
				// idle
				// maptypeid_changed
				// mousemove
				// mouseout
				// mouseover
				// projection_changed
				// resize
				// rightclick
				// tilesloaded
				// tilt_changed
				// zoom_changed
				
		 		google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
			  		map.setZoom(map.getZoom());

			  		if (this.getZoom() > 15) {
			    		this.setZoom(15);
			  		}
				});

		 		map.fitBounds(bounds);
		 
			}// end for loop
	    }// end status check  
	  }); // end geocode
	}// end geocode address function

	})(); // end initmap 

}// end window onload 


