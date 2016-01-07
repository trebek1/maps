window.onload = function(){
	(function initMap() {
		var myLatLng = {lat: -25.363, lng: 131.044};
		var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});

	})();
};

function gsubmit(event){
	event.preventDefault();

	var query = document.getElementById('gplace').value; 

	console.log("this is query ", query); 
	
	document.getElementById('gplace').value = '';  

	
}



