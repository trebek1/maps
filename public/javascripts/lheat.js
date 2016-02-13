window.onload = function(){

	var map = L.map('map').setView([ 40.706, -73.926], 14);

  L.esri.basemapLayer('Gray').addTo(map);

  L.esri.Heat.heatmapFeatureLayer({
    url: '//services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/Graffiti_Reports/FeatureServer/0',
    radius: 12
  }).addTo(map);
}


