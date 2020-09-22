/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/geolocation-leaflet-maps-widget.js. */
(function($,Drupal){'use strict';Drupal.behaviors.geolocationLeafletMapsWidget={attach:function(context,drupalSettings){$('.geolocation-map-widget',context).once('geolocation-leaflet-maps-widget-processed').each(function(index,item){var widgetId=$(item).attr('id').toString(),widget=Drupal.geolocation.widget.getWidgetById(widgetId);if(!widget)return;widget.map.addCenterUpdatedCallback(function(location,accuracy,identifier){if(typeof identifier==='undefined')return;if(identifier==='leaflet_control_geocoder')widget.locationAlteredCallback('leaflet-map-feature',location,null)})})},detach:function(context,drupalSettings){}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/modules/geolocation_leaflet/js/geolocation-leaflet-maps-widget.js. */