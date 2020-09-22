/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/webform/js/webform.element.select2.js. */
(function($,Drupal){'use strict';Drupal.webform=Drupal.webform||{};Drupal.webform.select2=Drupal.webform.select2||{};Drupal.webform.select2.options=Drupal.webform.select2.options||{};Drupal.webform.select2.options.width=Drupal.webform.select2.options.width||'100%';Drupal.webform.select2.options.widthInline=Drupal.webform.select2.options.widthInline||'50%';Drupal.behaviors.webformSelect2={attach:function(context){if(!$.fn.select2)return;$(context).find('select.js-webform-select2, .js-webform-select2 select').once('webform-select2').each(function(){var $select=$(this),options={};if($select.parents('.webform-element--title-inline').length)options.width=Drupal.webform.select2.options.widthInline;options=$.extend(options,Drupal.webform.select2.options);if($select.data('placeholder')){options.placeholder=$select.data('placeholder');if(!$select.prop('multiple'))options.allowClear=true};if($select.data('limit'))options.maximumSelectionLength=$select.data('limit');if(window.navigator.userAgent.indexOf('Trident/')!==false&&$select.attr('multiple')&&$select.attr('required'))$select.removeAttr('required');$select.select2(options)})}};$(function(){if($.fn.select2)$(document).on('state:visible state:visible-slide',function(e){$('select.select2-hidden-accessible').select2('close')});if($.ui&&$.ui.dialog&&$.ui.dialog.prototype._allowInteraction){var ui_dialog_interaction=$.ui.dialog.prototype._allowInteraction;$.ui.dialog.prototype._allowInteraction=function(e){if($(e.target).closest('.select2-dropdown').length)return true;return ui_dialog_interaction.apply(this,arguments)}}})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/webform/js/webform.element.select2.js. */