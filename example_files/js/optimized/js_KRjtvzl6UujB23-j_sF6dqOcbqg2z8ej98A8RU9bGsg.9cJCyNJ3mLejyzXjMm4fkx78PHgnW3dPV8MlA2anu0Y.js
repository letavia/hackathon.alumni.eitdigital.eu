/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/misc/drupal.init.js. */
if(window.jQuery)jQuery.noConflict();document.documentElement.className+=' js';(function(Drupal,drupalSettings){var domReady=function domReady(callback){if(document.readyState!=='loading'){callback()}else{var listener=function listener(){callback();document.removeEventListener('DOMContentLoaded',listener)};document.addEventListener('DOMContentLoaded',listener)}};domReady(function(){Drupal.attachBehaviors(document,drupalSettings)})})(Drupal,window.drupalSettings)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/misc/drupal.init.js. */