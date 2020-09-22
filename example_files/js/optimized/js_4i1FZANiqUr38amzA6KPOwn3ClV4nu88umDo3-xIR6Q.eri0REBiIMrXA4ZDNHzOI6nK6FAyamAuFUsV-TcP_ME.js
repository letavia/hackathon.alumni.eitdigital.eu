/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/js/geolocation-widget-map.js. */
(function($,Drupal){'use strict';$.extend(Drupal.geolocation.widget.GeolocationMapWidgetBase.prototype,{map:undefined,mapMarkers:[],getMarkerByDelta:function(delta){delta=parseInt(delta)||0;var marker=null;$.each(this.map.mapMarkers,function(index,currentMarker){if(currentMarker.delta===delta){marker=currentMarker;return false}});return marker},initializeMarker:function(marker,delta){marker.delta=delta},addMarker:function(location,delta){var marker=this.getMarkerByDelta(delta);if(typeof marker!=='undefined'&&typeof marker!==false)if(marker)this.map.removeMapMarker(marker)},updateMarker:function(location,delta){},removeMarker:function(delta){var marker=this.getMarkerByDelta(delta);if(marker)this.map.removeMapMarker(marker)}});Drupal.behaviors.geolocationWidget={attach:function(context,drupalSettings){$('.geolocation-map-widget',context).once('geolocation-widget-processed').each(function(index,item){var widgetSettings={},widgetWrapper=$(item);widgetSettings.wrapper=widgetWrapper;widgetSettings.id=widgetWrapper.attr('id').toString();widgetSettings.type=widgetWrapper.data('widget-type').toString();if(widgetWrapper.length===0)return;if(typeof drupalSettings.geolocation.widgetSettings[widgetSettings.id]!=='undefined')widgetSettings=$.extend(drupalSettings.geolocation.widgetSettings[widgetSettings.id],widgetSettings);var widget=Drupal.geolocation.widget.Factory(widgetSettings);if(!widget)return;widget.map=Drupal.geolocation.getMapById(widgetSettings.id+'-map');if(!widget.map){console.error(widgetSettings,'Could not find widget map.');return};widget.addLocationAlteredCallback(function(location,delta,identifier){if(identifier!=='marker'){if(location===null){widget.removeMarker(delta)}else{var marker=widget.getMarkerByDelta(delta);if(marker===null){widget.addMarker(location,delta)}else widget.updateMarker(location,delta)};widget.map.fitMapToMarkers()}});var table=$('table.field-multiple-table',widgetWrapper);if(table.length){var tableDrag=Drupal.tableDrag[table.attr('id')];if(tableDrag)tableDrag.row.prototype.onSwap=function(){widget.refreshWidgetByInputs()}};widget.map.addPopulatedCallback(function(map){widget.getAllInputs().each(function(delta,inputElement){var input=$(inputElement),lng=input.find('input.geolocation-input-longitude').val(),lat=input.find('input.geolocation-input-latitude').val();if(lng&&lat)widget.addMarker({lat:Number(lat),lng:Number(lng)},delta)});map.setCenter();if(widgetSettings.autoClientLocationMarker&&navigator.geolocation&&window.location.protocol==='https:')navigator.geolocation.getCurrentPosition(function(currentPosition){widget.locationAlteredCallback('auto-client-location',{lat:currentPosition.coords.latitude,lng:currentPosition.coords.longitude},null)})});widget.map.addClickCallback(function(location){widget.locationAlteredCallback('map-clicked',location,null)})})}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/js/geolocation-widget-map.js. */