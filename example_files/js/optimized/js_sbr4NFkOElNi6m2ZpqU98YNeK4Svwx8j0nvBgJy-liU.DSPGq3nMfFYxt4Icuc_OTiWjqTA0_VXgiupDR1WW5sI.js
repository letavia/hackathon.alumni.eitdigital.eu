/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/field_group/js/field_group.js. */
(function($){'use strict';Drupal.FieldGroup=Drupal.FieldGroup||{};Drupal.FieldGroup.Effects=Drupal.FieldGroup.Effects||{};Drupal.FieldGroup.groupWithfocus=null;Drupal.FieldGroup.setGroupWithfocus=function(element){element.css({display:'block'});Drupal.FieldGroup.groupWithfocus=element};Drupal.behaviors.fieldGroup={attach:function(context,settings){settings.field_group=settings.field_group||drupalSettings.field_group;if(typeof settings.field_group==='undefined')return;$.each(Drupal.FieldGroup.Effects,function(func){var type=func.toLowerCase().replace('process','');if(typeof settings.field_group[type]!=='undefined'&&$.isFunction(this.execute))this.execute(context,settings,settings.field_group[type])});$('.group-wrapper fieldset').each(function(){var fieldgroupID='field_group-'+$(this).attr('id')+' '+$(this).attr('id');$(this).attr('id',fieldgroupID)});$('.group-wrapper ul li').each(function(){var fieldGroupNavigationListIndex=$(this).index();$(this).children('a').click(function(){var fieldset=$('.group-wrapper fieldset').get(fieldGroupNavigationListIndex),hashUrl=$(fieldset).attr('id').replace(/^field_group-/,'').split(' ')[0];window.location.hash=hashUrl})})}}})(jQuery)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/field_group/js/field_group.js. */