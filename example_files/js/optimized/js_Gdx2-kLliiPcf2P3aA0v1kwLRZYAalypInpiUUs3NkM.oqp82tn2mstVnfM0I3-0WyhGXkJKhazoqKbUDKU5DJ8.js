/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/MapFeature/geolocation-control-recenter.js. */
(function($,Drupal){'use strict';Drupal.behaviors.leafletControlRecenter={attach:function(context,drupalSettings){Drupal.geolocation.executeFeatureOnAllMaps('leaflet_control_recenter',function(map,featureSettings){map.addInitializedCallback(function(map){var recenterButton=$('.geolocation-map-control .recenter',map.wrapper);recenterButton.click(function(e){map.setCenter();e.preventDefault()})});return true},drupalSettings)},detach:function(context,drupalSettings){}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/MapFeature/geolocation-control-recenter.js. */