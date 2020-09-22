/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/themes/contrib/bootstrap/js/dialog.js. */
(function($,Drupal,Bootstrap,Attributes){Bootstrap.Dialog=Bootstrap.Dialog||{};Bootstrap.Dialog.handlers={};Bootstrap.Dialog.Handler=function(type,data){this.ctor=$.fn.modal;this.extend=null;this.plugin='modal';this.prefix='modal';this.themeHooks={modal:'bootstrapModal',dialog:'bootstrapModalDialog',header:'bootstrapModalHeader',title:'bootstrapModalTitle',close:'bootstrapModalClose',content:'bootstrapModalContent',body:'bootstrapModalBody',footer:'bootstrapModalFooter'};this.type=type;this.selectors={dialog:'.modal-dialog',header:'.modal-header',title:'.modal-title',close:'.close',content:'.modal-content',body:'.modal-body',footer:'.modal-footer',buttons:'.modal-buttons'};$.extend(this,data);if(this.extend)Bootstrap.extend(this.plugin,this.extend)};Bootstrap.Dialog.Handler.get=function(type){if(type instanceof $)type=type[0];if(type instanceof HTMLElement)type=type.dialogType;if(!type)type='modal';if(!Bootstrap.Dialog.handlers[type])Bootstrap.Dialog.handlers[type]=new Bootstrap.Dialog.Handler();return Bootstrap.Dialog.handlers[type]};Bootstrap.Dialog.Handler.register=function(type,data){Bootstrap.Dialog.handlers[type]=new Bootstrap.Dialog.Handler(type,data)};Bootstrap.Dialog.Handler.prototype.invoke=function(context){var args=Array.prototype.slice.call(arguments);return this.ctor.apply(context,args.slice(1))};Bootstrap.Dialog.Handler.prototype.theme=function(hook){var args=Array.prototype.slice.call(arguments);return $(Drupal.theme.apply(Drupal.theme,[this.themeHooks[hook]].concat(args.slice(1))))};Bootstrap.Dialog.Handler.prototype.ensureModalStructure=function(element,options){var $element=$(element);if($element.is('[data-drupal-theme="'+this.themeHooks.modal+'"]'))return;var attributes=Attributes.create(element).remove('style').set('data-drupal-theme',this.themeHooks.modal);if(options.$trigger&&options.$trigger[0]){var trigger=options.$trigger[0],data={};for(var i=0,l=trigger.attributes.length;i<l;i++){var name=trigger.attributes[i].name;if(name&&name.substring(0,5)==='data-')data[name]=trigger.getAttribute(name)};attributes.merge(data)};options=$.extend(true,{},options,{attributes:attributes});var $modal=this.theme('modal',options),$body=$element.find(this.selectors.body),$existing=$body[0]?$body.contents():$element.contents();$element.attr(Attributes.create($modal).toPlainObject());$element.append($modal.html());$element.find(this.selectors.body).append($existing)}})(jQuery,Drupal,Drupal.bootstrap,Attributes)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/themes/contrib/bootstrap/js/dialog.js. */