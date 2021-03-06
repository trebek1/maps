window.onload = function(){

	(function(){

	L.mapbox.accessToken = 'pk.eyJ1IjoidHJlYmVrMSIsImEiOiJjaWo0c2ZtYzYwMDN3dGhtMzhremFtMW8wIn0.dBWgVtzgwok3cCi7p5euCg';
	
	L.RotatedMarker = L.Marker.extend({
	  options: { angle: 0 },
	  _setPos: function(pos) {
	    L.Marker.prototype._setPos.call(this, pos);
	    if (L.DomUtil.TRANSFORM) {
	      // use the CSS transform rule if available
	      this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';
	    } else if (L.Browser.ie) {
	      // fallback for IE6, IE7, IE8
	      var rad = this.options.angle * L.LatLng.DEG_TO_RAD,
	      costheta = Math.cos(rad),
	      sintheta = Math.sin(rad);
	      this._icon.style.filter += ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=' +
	        costheta + ', M12=' + (-sintheta) + ', M21=' + sintheta + ', M22=' + costheta + ')';
	    }
	  }
	});
	L.rotatedMarker = function(pos, options) {
	    return new L.RotatedMarker(pos, options);
	};

	var map = L.mapbox.map('map', 'mapbox.emerald', {
	    keyboard: false
	}).setView([37.9, -77],4);

	var marker = L.rotatedMarker(new L.LatLng(37.9, -77), {
	  icon: L.icon({
	    iconUrl: 'https://www.mapbox.com/maki/renders/airport-24@2x.png',
	    iconSize: [24, 24],
	  }),
	  draggable: true
	});

	marker.addTo(map);

	var direction = 0, manual = false;

	window.setInterval(function() {
	  var ll = marker.getLatLng();
	  ll.lat += Math.cos(direction) / 100;
	  ll.lng += Math.sin(direction) / 100;
	  marker.options.angle = direction * (180 / Math.PI);
	  marker.setLatLng(ll);
	  if (!manual && Math.random() > 0.95) {
	    direction += (Math.random() - 0.5) / 2;
	  }
	}, 10);

	// Add manual control of the airplane with left and right arrow keys, just because
	document.body.addEventListener('keydown', function(e) {
	  if (e.which == 37) {
	    direction -= 0.1; manual = true;
	  }
	  if (e.which == 39) {
	    direction += 0.1; manual = true;
	  }
	}, true);
	    

	    
	})();

}; 



