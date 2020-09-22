/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/imce/js/imce.input.js. */
(function($,Drupal){"use strict";Drupal.behaviors.imceUrlInput={attach:function(context,settings){$('.imce-url-input',context).not('.imce-url-processed').addClass('imce-url-processed').each(imceInput.processUrlInput)}};var imceInput=window.imceInput=window.imceInput||{processUrlInput:function(i,el){var button=imceInput.createUrlButton(el.id,el.getAttribute('data-imce-type'));el.parentNode.insertBefore(button,el)},createUrlButton:function(inputId,inputType){var button=document.createElement('a');button.href='#';button.className='imce-url-button';button.innerHTML='<span>'+Drupal.t('Open File Browser')+'</span>';button.onclick=imceInput.urlButtonClick;button.InputId=inputId||'imce-url-input-'+(Math.random()+'').substr(2);button.InputType=inputType||'link';return button},urlButtonClick:function(e){var url=Drupal.url('imce');url+=(url.indexOf('?')===-1?'?':'&')+'sendto=imceInput.urlSendto&inputId='+this.InputId+'&type='+this.InputType;$('#'+this.InputId).focus();window.open(url,'','width='+Math.min(1e3,parseInt(screen.availWidth*0.8,10))+',height='+Math.min(800,parseInt(screen.availHeight*0.8,10))+',resizable=1');return false},urlSendto:function(File,win){var url=File.getUrl(),el=$('#'+win.imce.getQuery('inputId'))[0];win.close();if(el)$(el).val(url).change().focus()}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/imce/js/imce.input.js. */