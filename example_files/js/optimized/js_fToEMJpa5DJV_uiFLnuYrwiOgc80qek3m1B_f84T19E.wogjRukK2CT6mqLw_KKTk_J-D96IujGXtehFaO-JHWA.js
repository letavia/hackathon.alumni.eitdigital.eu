/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/geolocation/js/geolocation-geocoder-api.js. */
(function($,Drupal){'use strict';Drupal.geolocation=Drupal.geolocation||{};Drupal.geolocation.geocoder=Drupal.geolocation.geocoder||{};Drupal.geolocation.geocoder.resultCallback=function(result,elementId){Drupal.geolocation.geocoder.resultCallbacks=Drupal.geolocation.geocoder.resultCallbacks||[];$.each(Drupal.geolocation.geocoder.resultCallbacks,function(index,callbackContainer){if(callbackContainer.elementId===elementId)callbackContainer.callback(result)})};Drupal.geolocation.geocoder.addResultCallback=function(callback,elementId){if(typeof elementId==='undefined')return;Drupal.geolocation.geocoder.resultCallbacks=Drupal.geolocation.geocoder.resultCallbacks||[];Drupal.geolocation.geocoder.resultCallbacks.push({callback:callback,elementId:elementId})};Drupal.geolocation.geocoder.clearCallback=function(elementId){Drupal.geolocation.geocoder.clearCallbacks=Drupal.geolocation.geocoder.clearCallbacks||[];$.each(Drupal.geolocation.geocoder.clearCallbacks,function(index,callbackContainer){if(callbackContainer.elementId===elementId)callbackContainer.callback()})};Drupal.geolocation.geocoder.addClearCallback=function(callback,elementId){if(typeof elementId==='undefined')return;Drupal.geolocation.geocoder.clearCallbacks=Drupal.geolocation.geocoder.clearCallbacks||[];Drupal.geolocation.geocoder.clearCallbacks.push({callback:callback,elementId:elementId})}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/geolocation/js/geolocation-geocoder-api.js. */