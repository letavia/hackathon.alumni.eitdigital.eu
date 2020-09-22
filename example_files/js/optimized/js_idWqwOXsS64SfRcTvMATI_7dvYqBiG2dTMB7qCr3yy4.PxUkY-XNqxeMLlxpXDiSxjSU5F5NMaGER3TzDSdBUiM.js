/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/js/geolocation-common-map.js. */
(function($,window,Drupal){'use strict';Drupal.behaviors.geolocationCommonMap={attach:function(context,drupalSettings){if(typeof drupalSettings.geolocation==='undefined')return;$.each(drupalSettings.geolocation.commonMap,function(mapId,commonMapSettings){var map=Drupal.geolocation.getMapById(mapId);if(!map)return;if(typeof commonMapSettings.dynamic_map!=='undefined'&&commonMapSettings.dynamic_map.enable&&commonMapSettings.dynamic_map.hide_form&&typeof commonMapSettings.dynamic_map.parameter_identifier!=='undefined'){var exposedForm=$('form#views-exposed-form-'+commonMapSettings.dynamic_map.update_view_id.replace(/_/g,'-')+'-'+commonMapSettings.dynamic_map.update_view_display_id.replace(/_/g,'-'));if(exposedForm.length===1){exposedForm.find('input[name^="'+commonMapSettings.dynamic_map.parameter_identifier+'"]').each(function(index,item){$(item).parent().hide()});if(exposedForm.find('input:visible:not(.form-submit), select:visible').length===0)exposedForm.hide()}}})},detach:function(context,drupalSettings){}};Drupal.geolocation.commonMap=Drupal.geolocation.commonMap||{};Drupal.geolocation.commonMap.dynamicMapViewsAjaxSettings=function(commonMapSettings){var view=$('.view-id-'+commonMapSettings.dynamic_map.update_view_id+'.view-display-id-'+commonMapSettings.dynamic_map.update_view_display_id);if(view.length===0){console.error("Geolocation - No common map container found.");return};if(typeof commonMapSettings.dynamic_map.boundary_filter==='undefined')return;var matches=/(js-view-dom-id-\w+)/.exec(view.attr('class').toString()),currentViewId=matches[1].replace('js-view-dom-id-','views_dom_id:'),viewInstance=Drupal.views.instances[currentViewId],ajaxSettings=$.extend(true,{},viewInstance.element_settings);ajaxSettings.progress.type='none';var exposedForm=$('form#views-exposed-form-'+commonMapSettings.dynamic_map.update_view_id.replace(/_/g,'-')+'-'+commonMapSettings.dynamic_map.update_view_display_id.replace(/_/g,'-'));if(exposedForm.length)jQuery.each(exposedForm.serializeArray(),function(index,field){var add={};add[field.name]=field.value;ajaxSettings.submit=$.extend(ajaxSettings.submit,add)});ajaxSettings.submit=$.extend(ajaxSettings.submit,{geolocation_common_map_dynamic_view:true});return ajaxSettings}})(jQuery,window,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/geolocation/js/geolocation-common-map.js. */