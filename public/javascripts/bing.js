

window.onload = function(){

	        
      (function getMap()
      
      {
      	var locations = []; 
      	var key = 'AkDLiTH48t4C_uawLpn_fCPjjxH3NcAQTyuQxC1t5I2-6bhPOPs_t9oEnHuZobGW';
        var  map = new Microsoft.Maps.Map(document.getElementById('myMap'), 
        	{
        		credentials: key,
        		center: new Microsoft.Maps.Location(37.7749300, -122.4194200),
        		zoom: 12

        });
        
        window.addEventListener('submit', function(){
      	event.preventDefault();
      	
      	var request = new XMLHttpRequest(), response, trial = document.getElementById('bingplace').value;
	      request.open("GET","https://nominatim.openstreetmap.org/search?q="+trial+"&format=json&addressdetails=1", true);
	      request.send(); 
	      request.onreadystatechange = function () {

	      if (request.readyState === 4 && request.status === 200){

	        response = JSON.parse(request.responseText);
	        var point = [parseFloat(response[0].lat), parseFloat(response[0].lon)];
	        var loc = new Microsoft.Maps.Location(parseFloat(response[0].lat), parseFloat(response[0].lon));
	      	var pin = new Microsoft.Maps.Pushpin(loc); 

            locations.push(loc);
            map.entities.push(pin);

	       var rect = Microsoft.Maps.LocationRect.fromLocations(locations);
	       var bounds = map.getBounds();
	       var ncenter = map.getCenter();

	       bounds = Microsoft.Maps.LocationRect.fromLocations(locations);
	       map.setView({center: ncenter, bounds : bounds});

	      }
	    }
            document.getElementById('bingplace').value = '';  
      			
      })
     
      })();   

	
}