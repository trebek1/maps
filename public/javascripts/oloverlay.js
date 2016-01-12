window.onload = function(){

// Creates an overlays in the given coordinates
    function createCircleOutOverlay(position) {
        var elem = document.createElement('div');
        elem.setAttribute('class', 'circleOut');
        return new ol.Overlay({
            element: elem,
            position: position,
            positioning: 'center-center'
        });
    }
    var map = new ol.Map({
        target: 'map',
        renderer: 'canvas',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.MapQuest({
                    layer: 'osm'
                })
            })
        ],
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        })
    });
    // Read data file
    $.get('2012_Earthquakes_Mag5.kml')
        .done(function(response){
            var format = new ol.format.KML();
            var features = format.readFeatures(response, {
              featureProjection: 'EPSG:3857'
            });
            var coordinates, overlay;
            for (var i = 0; i < features.length; i+=15) {
                coordinates = features[i].getGeometry().getCoordinates();
                overlay = createCircleOutOverlay(coordinates);
                map.addOverlay(overlay);
            };
        });

}
 