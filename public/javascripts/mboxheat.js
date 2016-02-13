window.onload = function(){

	(function(){

	L.mapbox.accessToken = 'pk.eyJ1IjoidHJlYmVrMSIsImEiOiJjaWo0c2ZtYzYwMDN3dGhtMzhremFtMW8wIn0.dBWgVtzgwok3cCi7p5euCg';
	var map = L.mapbox.map('map', 'mapbox.streets'),
    // The maxZoom states which zoom the markers are fully opaque at -
    // in this case, there are few markers far apart, so we set it low.
    heat = L.heatLayer([], { maxZoom: 12 }).addTo(map);

	// We're just using a featureLayer to pull marker data from Mapbox -
	// this is not added to the map.
	var layer = L.mapbox.featureLayer('examples.map-zr0njcqy').on('ready', function() {
    // Zoom the map to the bounds of the markers.
    map.fitBounds(layer.getBounds());
    // Add each marker point to the heatmap.
    layer.eachLayer(function(l) {
        heat.addLatLng(l.getLatLng());
    });
	});
	    

	    
	})();


}; 



