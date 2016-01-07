window.onload = function(){

var map = L.map('map').setView([37.804146, -122.275045], 16);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    //Use your own API key in place of search-xxxxxx. Get a key at mapzen.com/developers.
    var geocoder = L.control.geocoder('search-L968N6w').addTo(map);

}
