/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/core/modules/views_ui/js/ajax.js. */
(function($,Drupal,drupalSettings){Drupal.AjaxCommands.prototype.viewsHighlight=function(ajax,response,status){$('.hilited').removeClass('hilited');$(response.selector).addClass('hilited')};Drupal.AjaxCommands.prototype.viewsSetForm=function(ajax,response,status){var $form=$('.js-views-ui-dialog form'),$submitButtons=$form.find('input[type=submit].js-form-submit, button.js-form-submit').once('views-ajax-submit');$submitButtons.on('click mousedown',function(){this.form.clk=this});$form.once('views-ajax-submit').each(function(){var $form=$(this),elementSettings={url:response.url,event:'submit',base:$form.attr('id'),element:this},ajaxForm=Drupal.ajax(elementSettings);ajaxForm.$form=$form})};Drupal.AjaxCommands.prototype.viewsShowButtons=function(ajax,response,status){$('div.views-edit-view div.form-actions').removeClass('js-hide');if(response.changed)$('div.views-edit-view div.view-changed.messages').removeClass('js-hide')};Drupal.AjaxCommands.prototype.viewsTriggerPreview=function(ajax,response,status){if($('input#edit-displays-live-preview').is(':checked'))$('#preview-submit').trigger('click')};Drupal.AjaxCommands.prototype.viewsReplaceTitle=function(ajax,response,status){var doc=document,oldTitle=doc.title,escapedSiteName=response.siteName.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&'),re=new RegExp('.+ (.) '+escapedSiteName);doc.title=oldTitle.replace(re,response.title+' $1 '+response.siteName);$('h1.page-title').text(response.title)};Drupal.theme.tableDragChangedWarning=function(){return[]};Drupal.behaviors.livePreview={attach:function attach(context){$('input#edit-displays-live-preview',context).once('views-ajax').on('click',function(){if($(this).is(':checked'))$('#preview-submit').trigger('click')})}};Drupal.behaviors.syncPreviewDisplay={attach:function attach(context){$('#views-tabset a').once('views-ajax').on('click',function(){var href=$(this).attr('href'),displayId=href.substr(11);$('#views-live-preview #preview-display-id').val(displayId)})}};Drupal.behaviors.viewsAjax={collapseReplaced:false,attach:function attach(context,settings){var baseElementSettings={event:'click',progress:{type:'fullscreen'}};$('a.views-ajax-link',context).once('views-ajax').each(function(){var elementSettings=baseElementSettings;elementSettings.base=$(this).attr('id');elementSettings.element=this;if($(this).attr('href'))elementSettings.url=$(this).attr('href');Drupal.ajax(elementSettings)});$('div#views-live-preview a').once('views-ajax').each(function(){if(!$(this).attr('href'))return true;var elementSettings=baseElementSettings;elementSettings.url=$(this).attr('href');if(Drupal.Views.getPath(elementSettings.url).substring(0,21)!=='admin/structure/views')return true;elementSettings.wrapper='views-preview-wrapper';elementSettings.method='replaceWith';elementSettings.base=$(this).attr('id');elementSettings.element=this;Drupal.ajax(elementSettings)});$('div#views-live-preview input[type=submit]').once('views-ajax').each(function(event){$(this).on('click',function(){this.form.clk=this;return true});var elementSettings=baseElementSettings;elementSettings.url=$(this.form).attr('action');if(Drupal.Views.getPath(elementSettings.url).substring(0,21)!=='admin/structure/views')return true;elementSettings.wrapper='views-preview-wrapper';elementSettings.method='replaceWith';elementSettings.event='click';elementSettings.base=$(this).attr('id');elementSettings.element=this;Drupal.ajax(elementSettings)})}}})(jQuery,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/core/modules/views_ui/js/ajax.js. */