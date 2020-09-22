/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/webform/js/webform.element.codemirror.js. */
(function($,Drupal){'use strict';Drupal.webform=Drupal.webform||{};Drupal.webform.codeMirror=Drupal.webform.codeMirror||{};Drupal.webform.codeMirror.options=Drupal.webform.codeMirror.options||{};Drupal.behaviors.webformCodeMirror={attach:function(context){if(!window.CodeMirror)return;$(context).find('textarea.js-webform-codemirror').once('webform-codemirror').each(function(){var $input=$(this),$details=$(this).parents('details:not([open])');$details.attr('open','open');$(this).removeAttr('required');var options=$.extend({mode:$(this).attr('data-webform-codemirror-mode'),lineNumbers:true,lineWrapping:($(this).attr('wrap')==='off')?false:true,viewportMargin:Infinity,readOnly:($(this).prop('readonly')||$(this).prop('disabled'))?true:false,extraKeys:{Tab:function(cm){var spaces=Array(cm.getOption('indentUnit')+1).join(' ');cm.replaceSelection(spaces,'end','+element')},Esc:function(cm){var textarea=$(cm.getTextArea());$(textarea).show().addClass('visually-hidden');var $tabbable=$(':tabbable'),tabindex=$tabbable.index(textarea);$(textarea).hide().removeClass('visually-hidden');$tabbable.eq(tabindex+2).focus()}}},Drupal.webform.codeMirror.options),editor=CodeMirror.fromTextArea(this,options);$details.removeAttr('open');if($input.css('min-height')){var minHeight=$input.css('min-height');$(editor.getWrapperElement()).css('min-height',minHeight).find('.CodeMirror-scroll').css('min-height',minHeight)};if($input.css('max-height')){var maxHeight=$input.css('max-height');$(editor.getWrapperElement()).css('max-height',maxHeight).find('.CodeMirror-scroll').css('max-height',maxHeight)};var changeTimer=null;editor.on('change',function(){if(changeTimer){window.clearTimeout(changeTimer);changeTimer=null};changeTimer=setTimeout(function(){editor.save()},500)});$input.on('change',function(){editor.getDoc().setValue($input.val())});$input.on('webform:disabled',function(){editor.setOption('readOnly',$input.is(':disabled'))});setTimeout(function(){var $tabPanel=$input.parents('.ui-tabs-panel:hidden'),$details=$input.parents('details:not([open])');if(!$tabPanel.length&&$details.length)return;$tabPanel.show();$details.attr('open','open');editor.refresh();$tabPanel.hide();$details.removeAttr('open')},10)});if(window.CodeMirror.runMode)$(context).find('.js-webform-codemirror-runmode').once('webform-codemirror-runmode').each(function(){CodeMirror.runMode($(this).addClass('cm-s-default').text(),$(this).attr('data-webform-codemirror-mode'),this)})}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/webform/js/webform.element.codemirror.js. */