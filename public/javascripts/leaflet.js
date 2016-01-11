window.onload = function(){

	var bounds = []; 

	(function(){

	var map = L.map('map').setView([37.7749300, -122.4194200], 16);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);



	window.addEventListener('submit', function(){

	event.preventDefault();


		  var request = new XMLHttpRequest(), response, trial = document.getElementById('lplace').value;
	      request.open("GET", " http://nominatim.openstreetmap.org/search?q="+trial+"&format=json&addressdetails=1", true);
	      request.send(); 
	      request.onreadystatechange = function () {

	      if (request.readyState === 4 && request.status === 200){

	        response = JSON.parse(request.responseText);
	        
	        var point = [parseFloat(response[0].lat), parseFloat(response[0].lon)]

	        bounds.push(point); 

	        var marker = L.marker(point).addTo(map);

	        map.fitBounds([bounds])
	        
	      }
	    }

		document.getElementById('lplace').value = '';  
	}); 


	})();

}


