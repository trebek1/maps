
window.onload = function(){
  var iconFeatures=[], bounds = [], extent= [], subbounds = [];
  
  var vectorSource = new ol.source.Vector({
          features: iconFeatures,
          maxZoom: 15,
          minZoom: 12 //add an array of features
        });
        
        //create the style
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'https://openlayers.org/en/v3.9.0/examples/data/icon.png'
      }))
    });

    var vectorLayer = new ol.layer.Vector({
          source: vectorSource,
          style: iconStyle
        });

var map = new ol.Map({
    extent: extent,
    target: 'map',
    
    layers: [
      new ol.layer.Tile(
      {
        source: new ol.source.MapQuest({
          layer: 'sat'
          }
        )


      }), vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-122.4194200,37.7749300]),
      zoom: 12,
      minZoom: 1, 
      maxZoom: 12
    })



});

window.addEventListener('submit', function(event){
  event.preventDefault();

      var request = new XMLHttpRequest(), response, trial = document.getElementById('olplace').value;
      request.open("GET", " https://nominatim.openstreetmap.org/search?q="+trial+"&format=json&addressdetails=1", true);
      request.send(); 
      request.onreadystatechange = function () {

      if (request.readyState === 4 && request.status === 200){

        response = JSON.parse(request.responseText);
        
        var point = [parseFloat(response[0].lon), parseFloat(response[0].lat)]

        var iconFeature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform(point, 'EPSG:4326',     
          'EPSG:3857')),
          name: 'Null Island',
          population: 4000,
          rainfall: 500
        });

        vectorSource.addFeature(iconFeature);
        
        map.getView().fit(vectorSource.getExtent(),map.getSize());
      }
    }

    

  document.getElementById('olplace').value = '';  

})

}