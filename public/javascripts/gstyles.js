window.onload = function(){

	var map
    var styles = [
	{
		"featureType": "landscape",
		"stylers": [
			{
				"hue": "#6EFF00"
			},
			{
				"saturation": 10.600000000000009
			},
			{
				"lightness": -56.800000000000004
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.highway",
		"stylers": [
			{
				"hue": "#FF8C00"
			},
			{
				"saturation": 34
			},
			{
				"lightness": -3.799999999999997
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.arterial",
		"stylers": [
			{
				"hue": "#0095FF"
			},
			{
				"saturation": 0
			},
			{
				"lightness": -96.39999999999999
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.local",
		"stylers": [
			{
				"hue": "#FF8800"
			},
			{
				"saturation": -89.4
			},
			{
				"lightness": 135.2
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "water",
		"stylers": [
			{
				"hue": "#9FFF00"
			},
			{
				"saturation": -34.8
			},
			{
				"lightness": -86.2
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "poi",
		"stylers": [
			{
				"hue": "#FF4600"
			},
			{
				"saturation": 0
			},
			{
				"lightness": -43.8
			},
			{
				"gamma": 1
			}
		]
	}
];
      (function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749300, lng: -122.4194200},
          zoom: 12,
          styles: styles
        }); 
      })();

}