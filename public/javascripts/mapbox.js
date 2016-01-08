
var geojson = [
  
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.034084142948,
                38.909671288923
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "2022347336",
              "address": "1471 P St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 15th St NW",
              "postalCode": "20005",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.049766,
                38.900772
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 507-8357",
              "phone": "2025078357",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 22nd St NW",
              "postalCode": "20037",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.043929,
                38.910525
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 387-9338",
              "phone": "2023879338",
              "address": "1512 Connecticut Ave NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at Dupont Circle",
              "postalCode": "20036",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0672,
                38.90516896
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "3333 M St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 34th St NW",
              "postalCode": "20007",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.002583742142,
                38.887041080933
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 547-9338",
              "phone": "2025479338",
              "address": "221 Pennsylvania Ave SE",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "btwn 2nd & 3rd Sts. SE",
              "postalCode": "20003",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -76.933492720127,
                38.99225245786
              ]
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.097083330154,
                38.980979
              ]
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.359425054188,
                38.958058116661
              ]
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.10853099823,
                38.880100922392
              ]
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.28784,
                40.008008
              ]
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.20121216774,
                39.954030175164
              ]
            }
            
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.043959498405,
                38.903883387232
              ]
            }
            
          }
        ]
      }
];

window.onload = function(){

	(function(){

	L.mapbox.accessToken = 'pk.eyJ1IjoidHJlYmVrMSIsImEiOiJjaWo0c2ZtYzYwMDN3dGhtMzhremFtMW8wIn0.dBWgVtzgwok3cCi7p5euCg';
	var container = document.getElementById('container');

	var map = L.mapbox.map('map', 'mapbox.streets').setView([37.7749300,-122.4194200], 12); 

	map.featureLayer.setGeoJSON(geojson);

	// var newMarkerGroup = new L.LayerGroup();
	    map.on('click', function(e){
	       var newMarker = new L.marker(e.latlng).addTo(map);     
	    });

	    window.addEventListener('submit',function(event){
	    	event.preventDefault();
	    	var newMarker = new L.marker({lat: 37.7749300, lng: -122.4194200 }).addTo(map);
	    	document.getElementById('mboxplace').value = '';  
	    },false)

	    
	})();


}; 



