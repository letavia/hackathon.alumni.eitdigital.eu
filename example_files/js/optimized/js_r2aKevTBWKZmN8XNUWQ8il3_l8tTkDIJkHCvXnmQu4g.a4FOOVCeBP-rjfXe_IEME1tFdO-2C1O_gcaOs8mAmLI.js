/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/select2/js/select2.js. */
(function($,drupalSettings,Sortable){'use strict';Drupal.behaviors.select2={attach:function(context){$('.select2-widget',context).once('select2-init').each(function(){var config=$(this).data('select2-config');config.createTag=function(params){var term=$.trim(params.term);if(term==='')return null;return{id:'$ID:'+term,text:term}};config.templateSelection=function(option,container){if('element'in option&&'value'in option.element)$(container).data('optionValue',option.element.value);return option.text};$(this).data('select2-config',config);$(this).trigger('select2-init');config=$(this).data('select2-config');if(Object.prototype.hasOwnProperty.call(config,'dropdownParent'))config.dropdownParent=$(config.dropdownParent);$(this).select2(config);if(Object.prototype.hasOwnProperty.call(config,'ajax')&&config.multiple){var $select=$(this),$list=$select.next('.select2-container').find('ul.select2-selection__rendered');Sortable.create($list[0],{draggable:'li:not(.select2-search)',forceFallback:true,onEnd:function(){$($list.find('.select2-selection__choice').get().reverse()).each(function(){$select.prepend($select.find('option[value="'+$(this).data('optionValue')+'"]').first())})}})}})}}})(jQuery,drupalSettings,Sortable)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/select2/js/select2.js. */