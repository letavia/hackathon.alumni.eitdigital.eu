/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/MapFeature/geolocation-marker-popup.js. */
(function($,Drupal){'use strict';Drupal.behaviors.leafletMarkerPopup={attach:function(context,drupalSettings){Drupal.geolocation.executeFeatureOnAllMaps('leaflet_marker_popup',function(map,featureSettings){var geolocationLeafletPopupHandler=function(currentMarker){if(typeof(currentMarker.locationWrapper)==='undefined')return;var content=currentMarker.locationWrapper.find('.location-content');if(content.length<1)return;currentMarker.bindPopup(content.html());if(featureSettings.infoAutoDisplay)currentMarker.openPopup()};map.addPopulatedCallback(function(map){$.each(map.mapMarkers,function(index,currentMarker){geolocationLeafletPopupHandler(currentMarker)})});map.addMarkerAddedCallback(function(currentMarker){geolocationLeafletPopupHandler(currentMarker)});return true},drupalSettings)},detach:function(context,drupalSettings){}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/MapFeature/geolocation-marker-popup.js. */