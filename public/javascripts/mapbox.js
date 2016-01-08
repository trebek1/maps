window.onload = function(){

	(function(){

	L.mapbox.accessToken = 'pk.eyJ1IjoidHJlYmVrMSIsImEiOiJjaWo0c2ZtYzYwMDN3dGhtMzhremFtMW8wIn0.dBWgVtzgwok3cCi7p5euCg';
	var container = document.getElementById('container');

	var map = L.mapbox.map('map', 'mapbox.streets').setView([37.7749300,-122.4194200], 12, {minZoom: 10, maxZoom: 10}); 

	//map.featureLayer.setGeoJSON(geojson);

	   var newMarkerGroup = new L.LayerGroup();
	   newMarkerGroup.addTo(map);
	    map.on('click', function(e){
	       var newMarker = new L.marker(e.latlng).addTo(newMarkerGroup);     
	    });

	    window.addEventListener('submit',function(event){
	    	event.preventDefault();
	    	var request = new XMLHttpRequest(), response, trial = document.getElementById('mboxplace').value; 

	    	request.onreadystatechange = function () {

				if (request.readyState === 4 && request.status === 200){

					response = JSON.parse(request.responseText);
					var newMarker = new L.marker({lat: response.results[0][0].lat, lng: response.results[0][0].lon}).addTo(newMarkerGroup);
					var bnd = []; 

					for(x in newMarkerGroup._layers){
						bnd.push([newMarkerGroup._layers[x]._latlng.lat,newMarkerGroup._layers[x]._latlng.lng]); 
					} ; 
					map.fitBounds(bnd);
				}
			}

	    	request.open("GET", "http://api.tiles.mapbox.com/v3/examples.map-zr0njcqy/geocode/"+trial+".json", true);
			request.send();	

	    	// http://api.tiles.mapbox.com/v3/{map}/geocode/{query}.json
	    	document.getElementById('mboxplace').value = '';  
	    },false)

	    
	})();


}; 



