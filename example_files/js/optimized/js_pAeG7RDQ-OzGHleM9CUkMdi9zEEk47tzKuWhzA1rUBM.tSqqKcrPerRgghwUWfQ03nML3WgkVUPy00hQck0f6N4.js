/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/core/misc/dialog/dialog.ajax.js. */
(function($,Drupal){Drupal.behaviors.dialog={attach:function attach(context,settings){var $context=$(context);if(!$('#drupal-modal').length)$('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');var $dialog=$context.closest('.ui-dialog-content');if($dialog.length){if($dialog.dialog('option','drupalAutoButtons'))$dialog.trigger('dialogButtonsChange');$dialog.dialog('widget').trigger('focus')};var originalClose=settings.dialog.close;settings.dialog.close=function(event){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];originalClose.apply(settings.dialog,[event].concat(args));$(event.target).remove()}},prepareDialogButtons:function prepareDialogButtons($dialog){var buttons=[],$buttons=$dialog.find('.form-actions input[type=submit], .form-actions a.button');$buttons.each(function(){var $originalButton=$(this).css({display:'none'});buttons.push({text:$originalButton.html()||$originalButton.attr('value'),class:$originalButton.attr('class'),click:function click(e){if($originalButton.is('a')){$originalButton[0].click()}else{$originalButton.trigger('mousedown').trigger('mouseup').trigger('click');e.preventDefault()}}})});return buttons}};Drupal.AjaxCommands.prototype.openDialog=function(ajax,response,status){if(!response.selector)return false;var $dialog=$(response.selector);if(!$dialog.length)$dialog=$('<div id="'+response.selector.replace(/^#/,'')+'" class="ui-front"></div>').appendTo('body');if(!ajax.wrapper)ajax.wrapper=$dialog.attr('id');response.command='insert';response.method='html';ajax.commands.insert(ajax,response,status);if(!response.dialogOptions.buttons){response.dialogOptions.drupalAutoButtons=true;response.dialogOptions.buttons=Drupal.behaviors.dialog.prepareDialogButtons($dialog)};$dialog.on('dialogButtonsChange',function(){var buttons=Drupal.behaviors.dialog.prepareDialogButtons($dialog);$dialog.dialog('option','buttons',buttons)});response.dialogOptions=response.dialogOptions||{};var dialog=Drupal.dialog($dialog.get(0),response.dialogOptions);if(response.dialogOptions.modal){dialog.showModal()}else dialog.show();$dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions')};Drupal.AjaxCommands.prototype.closeDialog=function(ajax,response,status){var $dialog=$(response.selector);if($dialog.length){Drupal.dialog($dialog.get(0)).close();if(!response.persist)$dialog.remove()};$dialog.off('dialogButtonsChange')};Drupal.AjaxCommands.prototype.setDialogOption=function(ajax,response,status){var $dialog=$(response.selector);if($dialog.length)$dialog.dialog('option',response.optionName,response.optionValue)};$(window).on('dialog:aftercreate',function(e,dialog,$element,settings){$element.on('click.dialog','.dialog-cancel',function(e){dialog.close('cancel');e.preventDefault();e.stopPropagation()})});$(window).on('dialog:beforeclose',function(e,dialog,$element){$element.off('.dialog')})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/core/misc/dialog/dialog.ajax.js. */